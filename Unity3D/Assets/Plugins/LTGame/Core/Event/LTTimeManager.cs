using System;
using System.Collections.Generic;
using UnityEngine;

namespace LTGame
{
    /// <summary>
    /// 全局计时器
    /// float为(秒)
    /// int,long为(秒/10000)
    /// </summary>
    public class LTTimeManager
    {

        private static LTTimeManager _instance;

        public static LTTimeManager instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new LTTimeManager();
                }
                return _instance;
            }
        }

        public const int SCALE_UNIT = 10000;

        private Dictionary<int, LTTimerData> _timerMap;
        private List<LTTimerData> _timerList;
        private LTTimerDataPool _dataPool;
        private long _nowTime;
        private int _genId;
        private Stack<int> _needRemoveIDs;

        private LTTimeManager()
        {
            _timerMap = new Dictionary<int, LTTimerData>();
            _timerList = new List<LTTimerData>();
            _dataPool = new LTTimerDataPool();
            _nowTime = 0;
            _genId = 0;
            _needRemoveIDs = new Stack<int>();

            MonoHelper.instance.AddAction(EActionType.UPDATE, DoUpdate);
        }

        private void DoUpdate()
        {
            var deltaTime = Time.deltaTime;
            UpdateTimer((int)(deltaTime * SCALE_UNIT));
        }

        /// <summary>
        /// 生成一个唯一TimerID
        /// </summary>
        /// <returns></returns>
        private int _GenTimerID(LTTimerData data)
        {
            int genID = _genId;
            while (true)
            {
                if (!_timerMap.ContainsKey(genID))
                {
                    _timerMap[genID] = data;
                    data.id = genID;
                    break;
                }
                genID = ++_genId;
                if (_genId == int.MaxValue)
                {
                    _genId = int.MinValue;
                }
            }
            return genID;
        }

        public int AddTimer(int deltaTime, Action func, int loopCount = 1)
        {
            var timer = _dataPool.New(deltaTime, func, loopCount, _nowTime);
            _timerList.Add(timer);
            return _GenTimerID(timer);
        }

        public int AddTimer(float deltaTime, Action func, int loopCount = 1)
        {
            return AddTimer((int)(deltaTime * SCALE_UNIT), func, loopCount);
        }

        public bool RemoveTimer(int timerId)
        {
            LTTimerData timer = null;
            if (_timerMap.TryGetValue(timerId, out timer))
            {
                _timerMap.Remove(timerId);
                _timerList.Remove(timer);
                _dataPool.Return(timer);
                return true;
            }
            return false;
        }

        internal void UpdateTimer(int deltaTime)
        {
            // 增加计时
            _nowTime += deltaTime;
            if (_nowTime < 0)
            {
                throw new Exception("致命错误,timer计时器超过最大界限");
            }

            // 检查计时器并执行
            for (int i = 0; i < _timerList.Count; ++i)
            {
                var timer = _timerList[i];
                var expectTime = timer.lastUpdateTime + timer.deltaTime;
                if (expectTime <= _nowTime)
                {
                    timer.DoAction();
                }
                if (timer.remainCount == 0)
                {
                    _needRemoveIDs.Push(timer.id);
                }
            }

            // 检查移除列表
            while (_needRemoveIDs.Count != 0)
            {
                RemoveTimer(_needRemoveIDs.Pop());
            }
        }

    }
}
