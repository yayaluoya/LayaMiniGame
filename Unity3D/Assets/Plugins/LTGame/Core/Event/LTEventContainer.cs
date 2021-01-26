using System;
using System.Collections.Generic;

namespace LTGame
{

    public class LTEventData
    {
        public enum EEventType
        {
            NONE,
            OBJ,
            INT,
            STRING,
        }
        public EEventType eType;
        public readonly string eventID;
        public readonly Action<object> objParamAction;
        public readonly Action<int> intParamAction;
        public readonly Action<string> stringParamAction;
        public readonly Action emptyParamAction;
        public readonly bool doInQueue;

        public LTEventData(string id, Action<object> handler, bool inQueue)
        {
            eventID = id;
            objParamAction = handler;
            doInQueue = inQueue;
            eType = EEventType.OBJ;
        }

        public LTEventData(string id, Action handler, bool inQueue)
        {
            eventID = id;
            emptyParamAction = handler;
            doInQueue = inQueue;
            eType = EEventType.NONE;
        }

        public LTEventData(string id, Action<int> handler, bool inQueue)
        {
            eventID = id;
            intParamAction = handler;
            doInQueue = inQueue;
            eType = EEventType.INT;
        }

        public LTEventData(string id, Action<string> handler, bool inQueue)
        {
            eventID = id;
            stringParamAction = handler;
            doInQueue = inQueue;
            eType = EEventType.STRING;
        }

    }

    /// <summary>
    /// 事件容器
    /// author:liutao
    /// </summary>
    public class LTEventContainer
    {
        private List<LTEventData> _eventList = new List<LTEventData>();

        public void BindEventObj(string eventName, Action<object> action, bool doImd = false)
        {
            _eventList.Add(new LTEventData(eventName, action, doImd));
        }

        public void BindEvent(string eventName, Action action, bool doImd = false)
        {
            _eventList.Add(new LTEventData(eventName, action, doImd));
        }

        public void BindEvent(string eventName, Action<int> action, bool doImd = false)
        {
            _eventList.Add(new LTEventData(eventName, action, doImd));
        }

        public void RegistAll()
        {
            for (int i = 0; i < _eventList.Count; i++)
            {
                var data = _eventList[i];
                switch (data.eType)
                {
                    case LTEventData.EEventType.NONE:
                        LTEventCenter.Regist(data.eventID, data.emptyParamAction, data.doInQueue);
                        break;
                    case LTEventData.EEventType.INT:
                        LTEventCenter.Regist(data.eventID, data.intParamAction, data.doInQueue);
                        break;
                    case LTEventData.EEventType.OBJ:
                        LTEventCenter.RegistObj(data.eventID, data.objParamAction, data.doInQueue);
                        break;
                }
            }
        }

        public void UnRegistAll()
        {
            for (int i = 0; i < _eventList.Count; i++)
            {
                var data = _eventList[i];
                switch (data.eType)
                {
                    case LTEventData.EEventType.NONE:
                        LTEventCenter.UnRegist(data.eventID, data.emptyParamAction, data.doInQueue);
                        break;
                    case LTEventData.EEventType.OBJ:
                        LTEventCenter.UnRegist(data.eventID, data.objParamAction, data.doInQueue);
                        break;
                }
            }
        }
    }
}