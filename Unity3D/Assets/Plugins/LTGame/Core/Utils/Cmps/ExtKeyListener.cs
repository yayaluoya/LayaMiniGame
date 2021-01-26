using System;
using System.Collections.Generic;
using UnityEngine;
using System.Text;
using System.Threading.Tasks;

namespace LTGame
{
    class ExtKeyListener : MonoBehaviour
    {

        private void Update()
        {
            if (Input.GetKeyDown(KeyCode.F1))
            {
                ScreenCapture.CaptureScreenshot(string.Format("{0}_screenshot.png", System.DateTime.Now.Ticks));
            }
        }

    }
}
