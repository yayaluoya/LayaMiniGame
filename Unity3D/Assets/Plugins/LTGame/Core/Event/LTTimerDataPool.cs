using System;
using System.Collections.Generic;

namespace LTGame
{
    /// <summary>
    /// 计时器数据对象池
    /// </summary>
    class LTTimerDataPool
    {

        private Stack<LTTimerData> _dataPool;

        private int _maxCount = 50;

        internal LTTimerDataPool()
        {
            _dataPool = new Stack<LTTimerData>();
        }

        public LTTimerData New(int deltaTime, Action func, int loopCount, long nowTime)
        {
            LTTimerData result = null;
            if (_dataPool.Count == 0)
            {
                result = new LTTimerData();
            }
            else
            {
                result = _dataPool.Pop();
            }
            result.deltaTime = deltaTime;
            result.func = func;
            result.remainCount = loopCount;
            result.lastUpdateTime = nowTime;
            return result;
        }

        public void Return(LTTimerData data)
        {
            if (_dataPool.Count > _maxCount) return;
            _dataPool.Push(data);
            // 释放func引用
            data.func = null;
        }

    }
}
