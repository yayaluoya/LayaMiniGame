using System;
using System.Collections.Generic;

namespace LTGame
{
    class LTEventHandler : IEquatable<LTEventHandler>
    {

        public bool isInQueue;
        public Action zeroParamAction;
        public Action<int> intParamAction;
        public Action<float> floatParamAction;
        public Action<string> stringParamAction;
        public Action<object> objParamAction;

        public bool Equals(LTEventHandler other)
        {
            return isInQueue == other.isInQueue
                && zeroParamAction == other.zeroParamAction
                && intParamAction == other.intParamAction
                && floatParamAction == other.floatParamAction
                && stringParamAction == other.stringParamAction
                && objParamAction == other.objParamAction;
        }

        public void Invoke(object o, int intParam, float floatParam, string stringParam)
        {
            if (zeroParamAction != null)
            {
                zeroParamAction.Invoke();
            }
            if (intParamAction != null)
            {
                intParamAction.Invoke(intParam);
            }
            if (floatParamAction != null)
            {
                floatParamAction.Invoke(floatParam);
            }
            if (stringParamAction != null)
            {
                stringParamAction.Invoke(stringParam);
            }
            if (objParamAction != null)
            {
                objParamAction.Invoke(o);
            }
        }
    }
}
