using System;


namespace LTGame
{
    /// <summary>
    /// 计时器数据
    /// </summary>
    class LTTimerData
    {
        /// <summary>
        /// 计时器唯一ID
        /// </summary>
        public int id;
        /// <summary>
        /// 上一次更新时间
        /// </summary>
        public long lastUpdateTime;
        /// <summary>
        /// 剩余循环次数
        /// </summary>
        public int remainCount;
        /// <summary>
        /// 需要执行的方法
        /// </summary>
        public Action func;
        /// <summary>
        /// 执行间隔时间
        /// </summary>
        public long deltaTime;

        public void DoAction()
        {
            if (func != null)
            {
                func.Invoke();
            }
            lastUpdateTime += deltaTime;
            if (remainCount > 0)
            {
                remainCount--;
            }
        }
    }
}
