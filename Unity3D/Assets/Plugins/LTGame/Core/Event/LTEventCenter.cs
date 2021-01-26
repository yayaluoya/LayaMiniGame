using System;
using System.Collections.Generic;
using UnityEngine;

namespace LTGame
{
    /// <summary>
    /// 消息总线，负责注册，分发事件
    /// </summary>
    public static class LTEventCenter
    {

        /// <summary>
        /// 是否开启多线程模式
        /// </summary>
        public static bool ENABLE_THREAD = false;

        /// <summary>
        /// 立即执行
        /// </summary>
        private static Dictionary<string, List<LTEventHandler>> _eventMap = new Dictionary<string, List<LTEventHandler>>();

        /// <summary>
        /// 注册事件
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="action"></param>
        /// <param name="inQuene"></param>
        public static void RegistObj(string notifyID, Action<object> action, bool inQuene)
        {
            LTEventHandler handle = new LTEventHandler()
            {
                isInQueue = inQuene,
                objParamAction = action
            };
            _HandleRegist(notifyID, handle);
        }

        /// <summary>
        /// 注册事件
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="action"></param>
        /// <param name="inQuene"></param>
        public static void Regist(string notifyID, Action<string> action, bool inQuene)
        {
            LTEventHandler handle = new LTEventHandler()
            {
                isInQueue = inQuene,
                stringParamAction = action
            };
            _HandleRegist(notifyID, handle);
        }

        public static void Regist(string notifyID, Action<int> action, bool inQuene)
        {
            LTEventHandler handle = new LTEventHandler()
            {
                isInQueue = inQuene,
                intParamAction = action
            };
            _HandleRegist(notifyID, handle);
        }

        /// <summary>
        /// 注册事件
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="action"></param>
        /// <param name="inQuene"></param>
        public static void Regist(string notifyID, Action action, bool inQuene)
        {
            LTEventHandler handle = new LTEventHandler()
            {
                isInQueue = inQuene,
                zeroParamAction = action
            };
            _HandleRegist(notifyID, handle);
        }

        /// <summary>
        /// 注册事件
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="action"></param>
        public static void RegistObj(string notifyID, Action<object> action)
        {
            Regist(notifyID, action, false);
        }

        private static void _HandleRegist(string notifyID, LTEventHandler handle)
        {
            List<LTEventHandler> findList = null;
            if (_eventMap.TryGetValue(notifyID, out findList))
            {
                if (findList.Contains(handle))
                {
                    LTDebug.LogWarning("{0}已存在同样事件注册{1},本次注册取消", notifyID, handle);
                }
                else
                {
                    findList.Add(handle);
                }
            }
            else
            {
                findList = new List<LTEventHandler>();
                findList.Add(handle);
                _eventMap.Add(notifyID, findList);
            }
        }

        /// <summary>
        /// 取消注册事件
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="action"></param>
        /// <param name="inQuene"></param>
        public static void UnRegist(string notifyID, Action action, bool inQuene)
        {
            LTEventHandler handle = new LTEventHandler()
            {
                isInQueue = inQuene,
                zeroParamAction = action
            };
            List<LTEventHandler> findList = null;
            if (_eventMap.TryGetValue(notifyID, out findList))
            {
                if (findList.Contains(handle))
                {
                    findList.Remove(handle);
                }
                if (findList.Count == 0)
                {
                    _eventMap.Remove(notifyID);
                }
            }
        }

        /// <summary>
        /// 取消注册事件
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="action"></param>
        /// <param name="inQuene"></param>
        public static void UnRegist(string notifyID, Action<object> action, bool inQuene)
        {
            LTEventHandler handle = new LTEventHandler()
            {
                isInQueue = inQuene,
                objParamAction = action
            };
            List<LTEventHandler> findList = null;
            if (_eventMap.TryGetValue(notifyID, out findList))
            {
                if (findList.Contains(handle))
                {
                    findList.Remove(handle);
                }
                if (findList.Count == 0)
                {
                    _eventMap.Remove(notifyID);
                }
            }
        }

        /// <summary>
        /// 取消注册事件,删除所有找到事件
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="action"></param>
        public static void UnRegist(string notifyID, Action<object> action)
        {
            UnRegist(notifyID, action, true);
            UnRegist(notifyID, action, false);
        }

        private static void _DoAction(LTEventHandler handle)
        {
            if (handle.isInQueue && ENABLE_THREAD)
            {
                LTTimeManager.instance.AddTimer(0, () =>
                {
                    handle.Invoke(null, 0, 0, null);
                });
            }
            else
            {
                handle.Invoke(null, 0, 0, null);
            }
        }

        private static void _DoAction(LTEventHandler handle, object obj)
        {
            if (handle.isInQueue && ENABLE_THREAD)
            {
                LTTimeManager.instance.AddTimer(0, () =>
                {
                    handle.Invoke(obj, 0, 0, null);
                });
            }
            else
            {
                handle.Invoke(obj, 0, 0, null);
            }
        }

        private static void _DoAction(LTEventHandler handle, int _int)
        {
            if (handle.isInQueue && ENABLE_THREAD)
            {
                LTTimeManager.instance.AddTimer(0, () =>
                {
                    handle.Invoke(_int, _int, _int, null);
                });
            }
            else
            {
                handle.Invoke(_int, _int, _int, null);
            }
        }

        private static void _DoAction(LTEventHandler handle, float _float)
        {
            if (handle.isInQueue && ENABLE_THREAD)
            {
                LTTimeManager.instance.AddTimer(0, () =>
                {
                    handle.Invoke(null, 0, _float, null);
                });
            }
            else
            {
                handle.Invoke(null, 0, _float, null);
            }
        }

        private static void _DoAction(LTEventHandler handle, string _string)
        {
            if (handle.isInQueue && ENABLE_THREAD)
            {
                LTTimeManager.instance.AddTimer(0, () =>
                {
                    handle.Invoke(_string, 0, 0, _string);
                });
            }
            else
            {
                handle.Invoke(_string, 0, 0, _string);
            }
        }

        #region SendNotify

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="notifyID"></param>
        public static void SendNotify(string notifyID)
        {
            List<LTEventHandler> findList = null;
            bool isDone = false;
            if (_eventMap.TryGetValue(notifyID, out findList))
            {
                for (int i = 0; i < findList.Count; ++i)
                {
                    _DoAction(findList[i]);
                    isDone = true;
                }
            }
            if (!isDone)
            {
                LTDebug.LogWarning("[LTEventLog]{0}事件没有任何响应", notifyID);
            }
        }

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="obj"></param>
        public static void SendNotifyObj(string notifyID, object obj)
        {
            List<LTEventHandler> findList = null;
            bool isDone = false;
            if (_eventMap.TryGetValue(notifyID, out findList))
            {
                for (int i = 0; i < findList.Count; ++i)
                {
                    _DoAction(findList[i], obj);
                    isDone = true;
                }
            }
            if (!isDone)
            {
                LTDebug.LogWarning("[LTEventLog]{0}事件没有任何响应", notifyID);
            }
        }

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="_int"></param>
        public static void SendNotify(string notifyID, int _int)
        {
            List<LTEventHandler> findList = null;
            bool isDone = false;
            if (_eventMap.TryGetValue(notifyID, out findList))
            {
                for (int i = 0; i < findList.Count; ++i)
                {
                    _DoAction(findList[i], _int);
                    isDone = true;
                }
            }
            if (!isDone)
            {
                LTDebug.LogWarning("[LTEventLog]{0}事件没有任何响应", notifyID);
            }
        }

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="_float"></param>
        public static void SendNotify(string notifyID, float _float)
        {
            List<LTEventHandler> findList = null;
            bool isDone = false;
            if (_eventMap.TryGetValue(notifyID, out findList))
            {
                for (int i = 0; i < findList.Count; ++i)
                {
                    _DoAction(findList[i], _float);
                    isDone = true;
                }
            }
            if (!isDone)
            {
                LTDebug.LogWarning("[LTEventLog]{0}事件没有任何响应", notifyID);
            }
        }

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="notifyID"></param>
        /// <param name="_string"></param>
        public static void SendNotify(string notifyID, string _string)
        {
            List<LTEventHandler> findList = null;
            bool isDone = false;
            if (_eventMap.TryGetValue(notifyID, out findList))
            {
                for (int i = 0; i < findList.Count; ++i)
                {
                    _DoAction(findList[i], _string);
                    isDone = true;
                }
            }
            if (!isDone)
            {
                LTDebug.LogWarning("[LTEventLog]{0}事件没有任何响应", notifyID);
            }
        }

        #endregion

        /// <summary>
        /// 清除注册事件
        /// </summary>
        /// <param name="notifyID"></param>
        public static void ClearNotify(string notifyID)
        {
            if (_eventMap.ContainsKey(notifyID))
            {
                _eventMap.Remove(notifyID);
            }
        }

        /// <summary>
        /// 清除所有注册事件
        /// </summary>
        public static void ClearAll()
        {
            _eventMap.Clear();
        }
    }
}
