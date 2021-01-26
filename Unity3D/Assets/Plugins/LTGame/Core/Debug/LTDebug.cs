using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace LTGame
{

    public enum ELogLevel
    {
        NONE = 0 ,
        INFO = 1 << 0,
        WARNING = 1 << 1,
        ERROR = 1 << 2,
        EXCEPTION = 1 << 3,
        ALL = INFO | WARNING | ERROR | EXCEPTION
    }

    public static class LTDebug
    {

#if UNITY_EDITOR
        public static ELogLevel logLevel = ELogLevel.ALL;
#else
        public static ELogLevel logLevel = ELogLevel.ERROR;
#endif

        public static void LogException(Exception e)
        {
            if (!IsMatchLevel(ELogLevel.EXCEPTION)) return;
            Debug.LogException(e);
        }

        public static void Log(string str)
        {
            if (!IsMatchLevel(ELogLevel.INFO)) return;
            Debug.Log(str);
        }

        public static void Log(string strFormat, params object[] objs)
        {
            if (!IsMatchLevel(ELogLevel.INFO)) return;
            Debug.LogFormat(strFormat, objs);
        }

        public static void LogWarning(string str)
        {
            if (!IsMatchLevel(ELogLevel.WARNING)) return;
            Debug.LogWarning(str);
        }

        public static void LogWarning(string strFormat, params object[] objs)
        {
            if (!IsMatchLevel(ELogLevel.WARNING)) return;
            Debug.LogWarningFormat(strFormat, objs);
        }

        public static void LogError(string str)
        {
            if (!IsMatchLevel(ELogLevel.ERROR)) return;
            Debug.LogError(str);
        }

        public static void LogError(string strFormat, params object[] objs)
        {
            if (!IsMatchLevel(ELogLevel.ERROR)) return;
            Debug.LogErrorFormat(strFormat, objs);
        }

        private static bool IsMatchLevel(ELogLevel level)
        {
            return (logLevel & level) > 0;
        }

    }
}
