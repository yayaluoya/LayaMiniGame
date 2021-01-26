using System.Collections.Generic;
using System;
using UnityEngine;
using System.Collections;

namespace LTGame
{

    /// <summary>
    /// 更新类型
    /// </summary>
    public enum EActionType
    {
        UPDATE,
        LATE_UPDATE,
        FIXED_UPDATE,
        /// <summary>
        /// 离开application
        /// </summary>
        ON_PAUSE_FALSE,
        /// <summary>
        /// 回到application
        /// </summary>
        ON_PAUSE_TRUE,
        Destory,
    }

    /// <summary>
    /// 反射工程内用的update辅助类
    /// author:liutao
    /// </summary>
    public class MonoHelper : MonoSingleton<MonoHelper>
    {

        public int m_UpdateCount;
        public int m_LateUpdateCount;
        public int m_FixedUpdateCount;

        private List<Action> _onUpdate;
        private List<Action> _onLateUpdate;
        private List<Action> _onFixedUpdate;
        private List<Action> _onDestory;
        private List<Action> _onPauseFalse;
        private List<Action> _onPauseTrue;

        private void Awake()
        {
            _onUpdate = new List<Action>();
            _onLateUpdate = new List<Action>();
            _onFixedUpdate = new List<Action>();
            _onDestory = new List<Action>();
            _onPauseFalse = new List<Action>();
            _onPauseTrue = new List<Action>();
            DontDestroyOnLoad(this.gameObject);
        }

        public void AddAction(EActionType type, Action action)
        {
            switch (type)
            {
                case EActionType.UPDATE:
                    _onUpdate.Add(action);
                    m_UpdateCount = _onUpdate.Count;
                    break;
                case EActionType.LATE_UPDATE:
                    _onLateUpdate.Add(action);
                    m_LateUpdateCount = _onLateUpdate.Count;
                    break;
                case EActionType.FIXED_UPDATE:
                    _onFixedUpdate.Add(action);
                    m_FixedUpdateCount = _onFixedUpdate.Count;
                    break;
                case EActionType.Destory:
                    _onDestory.Add(action);
                    break;
                case EActionType.ON_PAUSE_FALSE:
                    _onPauseFalse.Add(action);
                    break;
                case EActionType.ON_PAUSE_TRUE:
                    _onPauseTrue.Add(action);
                    break;
            }
        }

        public void RemoveAction(EActionType type, Action action)
        {
            switch (type)
            {
                case EActionType.UPDATE:
                    _onUpdate.Remove(action);
                    m_UpdateCount = _onUpdate.Count;
                    break;
                case EActionType.LATE_UPDATE:
                    _onLateUpdate.Remove(action);
                    m_LateUpdateCount = _onLateUpdate.Count;
                    break;
                case EActionType.FIXED_UPDATE:
                    _onFixedUpdate.Remove(action);
                    m_FixedUpdateCount = _onFixedUpdate.Count;
                    break;
            }
        }
        public Coroutine DoCoroutine(IEnumerator func)
        {

            return StartCoroutine(func);

        }
        public void CoroutineEnd(Coroutine cort)
        {
            if (cort != null)
                StopCoroutine(cort);
        }
        private static void _DoFuncs(List<Action> actions)
        {
            for (int i = 0; i < actions.Count; ++i)
            {
                actions[i].Invoke();
            }
        }

        void Update()
        {
            m_UpdateCount = _onUpdate.Count;
            _DoFuncs(_onUpdate);
        }

        void LateUpdate()
        {
            _DoFuncs(_onLateUpdate);
        }

        void FixedUpdate()
        {
            _DoFuncs(_onFixedUpdate);
        }

        private void OnDestroy()
        {
            _DoFuncs(_onDestory);
        }

        private void OnApplicationPause(bool pause)
        {
            if (pause)
            {
                _DoFuncs(_onPauseTrue);
            }
            else
            {
                _DoFuncs(_onPauseFalse);
            }
        }

    }
}