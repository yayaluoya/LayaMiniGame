using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

[RequireComponent(typeof(Camera))]
public class EffectOutput : MonoBehaviour
{

    public string saveDirName = "saveDir";

    public Vector2Int pngSize = new Vector2Int(512, 512);

    public int exportPngCount = 16;

    public float effectDuring = 1f;

    private Camera _camera;

    private RenderTexture _rt;
    private string _savePath;
    private int _frameCount;
    private float _perTime;

    private void Start()
    {
        Time.captureFramerate = 60;

        _rt = new RenderTexture(pngSize.x, pngSize.y, 24);
        _rt.filterMode = FilterMode.Point;
        _camera = GetComponent<Camera>();
        _camera.pixelRect = new Rect(0, 0, pngSize.x, pngSize.y);
        _perTime = effectDuring / exportPngCount;

        _savePath = Application.dataPath + "/" + saveDirName + "/";
        Debug.Log(_savePath);
        LTGame.LTUtils.MakeDirExist(_savePath);
        _frameCount = 1;
        StartCoroutine(_Cap());
    }

    private IEnumerator _Cap()
    {
        while(true)
        {
            _camera.targetTexture = _rt;
            _camera.Render();
            _camera.targetTexture = null;

            RenderTexture.active = _rt;
            var t2d = new Texture2D(pngSize.x, pngSize.y, TextureFormat.RGBA32, false);
            t2d.ReadPixels(new Rect(0, 0, pngSize.x, pngSize.y), 0, 0);
            RenderTexture.active = null;
            t2d.Apply();

            var fileStr = _savePath + _frameCount++ + ".png";
            if (File.Exists(fileStr))
            {
                File.Delete(fileStr);
            }
            File.WriteAllBytes(fileStr, t2d.EncodeToPNG());
            
            if (_frameCount > exportPngCount)
            {
                break;
            }

            yield return new WaitForSeconds(_perTime);
        }

        _camera.targetTexture = null;
        RenderTexture.active = null;

        UnityEditor.AssetDatabase.Refresh();
        UnityEditor.EditorApplication.isPlaying = false;

    }

}
