using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;


namespace LTGame
{
    class LTEditorMenu
    {

        [MenuItem("LTGame/TestFunc")]
        static void TestFunc()
        {
            var up = new Vector3(0, 1, 0);
            var forward = new Vector3(1, 0, 0);
            var toCheck = new Vector3(2.843f, -0.157f, 0);
            var angle = Vector3.SignedAngle(forward, toCheck, up);
            Debug.LogError("angle:" + angle);
        }

        /*
        private static float getTotalValueFromGradientFloat(in Vector2[] gradientNumbers, in float normalizedAge)
        {
            float totalValue = 0f;
            for (int i = 1; i < 4; i++)
            {
                Vector2 gradientNumber = gradientNumbers[i];
                float key = gradientNumber.x;
                Vector2 lastGradientNumber = gradientNumbers[i - 1];
                float lastValue = lastGradientNumber.y;

                if (key >= normalizedAge)
                {
                    float lastKey = lastGradientNumber.x;
                    float age = (normalizedAge - lastKey) / (key - lastKey);
                    var value = lastValue + Mathf.Lerp(lastValue, gradientNumber.y, age);
                    totalValue += value / 2.0 * a_ShapePositionStartLifeTime.w * (normalizedAge - lastKey);
                    break;
                }
                else
                {
                    totalValue += (lastValue + gradientNumber.y) / 2.0 * a_ShapePositionStartLifeTime.w * (key - lastGradientNumber.x);
                }
            }
            return totalValue;
        }
        */

        public static Quaternion FromEulerAngle(float x, float y, float z)
        {
            var eulerX = x / 2 * Mathf.Deg2Rad;
            var cX = Mathf.Cos(eulerX);
            var sX = Mathf.Sin(eulerX);
            var eulerY = y / 2 * Mathf.Deg2Rad;
            var cY = Mathf.Cos(eulerY);
            var sY = Mathf.Sin(eulerY);
            var eulerZ = z / 2 * Mathf.Deg2Rad;
            var cZ = Mathf.Cos(eulerZ);
            var sZ = Mathf.Sin(eulerZ);

            var ix = sX * cY * cZ - cX * sY * sZ;
            var iy = cX * sY * cZ + sX * cY * sZ;
            var iz = cX * cY * sZ - sX * sY * cZ;
            var iw = cX * cY * cZ + sX * sY * sZ;
            var q = new Quaternion(ix, iy, iz, iw);
            return q;
        }

    }
}
