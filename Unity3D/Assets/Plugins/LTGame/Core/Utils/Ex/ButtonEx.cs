using LTGame;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine.UI;

public static class ButtonEx
{

    public static void SetInteractable(this Button btn, bool value)
    {
        if (btn == null) return;
        if (btn.interactable == value) return;
        btn.interactable = value;
    }

    private static ColorBlock gray = new ColorBlock()
    {
        colorMultiplier = 1f,
        fadeDuration = 0f,
        normalColor = "#C8C8C880".ToColor(false),
        disabledColor = "#C8C8C880".ToColor(false),
        pressedColor = "#C8C8C880".ToColor(false),
        highlightedColor = "#C8C8C880".ToColor(false),
    };
    private static ColorBlock normal = new ColorBlock()
    {
        colorMultiplier = 1f,
        fadeDuration = 0.2f,
        normalColor = "#FFFFFFFF".ToColor(false),
        disabledColor = "#C8C8C880".ToColor(false),
        pressedColor = "#C8C8C8FF".ToColor(false),
        highlightedColor = "#F5F5F5FF".ToColor(false),
    };
    public static void SetGray(this Button btn)
    {
        if (btn == null) return;
        btn.colors = gray;
    }

    public static void SetNormal(this Button btn)
    {
        if (btn == null) return;
        btn.colors = normal;
    }

}
