using System;
using System.Threading;

namespace LTGame
{
    public class NetTimeManager
    {

        private bool _isNetTimeAvaliable;
        public bool isNetTimeAvaliable
        {
            get
            {
                if (_isNetTimeAvaliable)
                {
                    return true;
                }
                else
                {
                    var nowTick = System.DateTime.Now.Ticks;
                    var passTime = new TimeSpan(nowTick - _lastUpdateTick);
                    if (passTime.TotalSeconds > 10) return false;
                    return true;
                }
            }
        }

        private DateTime _netTime;
        public DateTime netTime
        {
            get
            {
                return System.DateTime.Now;
                var nowTick = System.DateTime.Now.Ticks;
                var passTime = new TimeSpan(nowTick - _lastUpdateTick);
                return _netTime.Add(passTime);
            }
        }

        private long _lastUpdateTick;

        private Thread _updateThread;

        private bool _isRunning;

        public NetTimeManager()
        {
            _isRunning = true;
            _updateThread = new Thread(_ThreadUpdate);
            _updateThread.Start();

            // 用本地时间初始化
            _netTime = System.DateTime.Now;
            _lastUpdateTick = _netTime.Ticks;

            MonoHelper.instance.AddAction(EActionType.Destory, _OnDestory);
        }

        public void _OnDestory()
        {
            _isRunning = false;
        }

        private void _ThreadUpdate()
        {
            while (_isRunning)
            {
                _isNetTimeAvaliable = _UpdateNetTime();
                if (_isNetTimeAvaliable)
                {
                    _lastUpdateTick = System.DateTime.Now.Ticks;
                    // 5s 更新
                    Thread.Sleep(1000 * 5);
                }
                else
                {
                    // 1s 更新
                    Thread.Sleep(1000);
                }
            }
        }

        private bool _UpdateNetTime()
        {
            return true;
            var netDateTime = LTUtils.GetNetDateTime();
            var success = !string.IsNullOrEmpty(netDateTime);
            if (success)
            {
                var netTime = Convert.ToDateTime(netDateTime);
                var localTime = System.DateTime.Now;
                var offset = netTime - localTime;
                if (Math.Abs(offset.TotalMinutes) < 1)
                {
                    _netTime = localTime;
                }
                else
                {
                    _netTime = netTime;
                }
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
