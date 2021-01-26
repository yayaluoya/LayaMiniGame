using System;
using System.Collections.Generic;
using UnityEngine;
using System.Text;
using System.Threading.Tasks;

namespace LTGame
{
    class DisableOnAwake : MonoBehaviour
    {

        private void Awake()
        {
            gameObject.SetActive(false);
        }

    }
}
