using System;
using System.Collections.Generic;
using System.Text;

namespace LTGame
{
    class CSStruct
    {
        public List<CSFiled> fileds;
        public string className; // class名字
        public string nameSpace; // 命名空间
        public bool isConst = false;

        public const string IMPORT = "using System.Collections.Generic;";
        public const string HEAD = "namespace {0}\n";
        public const string LEFT_C = "{";
        public const string right_C = "}";
        public const string CLASS_NAME = "    public class {0}\n";
        public const string CLASS_NAME_WITHIN_SUB = "    public class {0} : {1}\n";
        public const string ID_INTERFACE = @"
        public int ID()
        {
            return id;
        }";
        public const string CONFIG_PATH = "        public const string CONFIG_PATH = \"{0}\";\n";
        public const string CONFIG_LIST = "        public List<{0}> dataList;\n";

        public const string KEY_NAME = "        public const string KEY_NAME = \"{0}\";";

        public const string CONFIG_INTERFACE = @"

        private Dictionary<int, {0}> _configMap;
        public void Init()
        {
            _configMap = new Dictionary<int, {0}>();
            if (dataList == null) return;
            foreach (var item in dataList)
            {
                _configMap[item.id] = item;
            }
        }

        public {0} GetConfigById(int id)
        {
            {0} result = null;
            _configMap.TryGetValue(id, out result);
            return result;
        }

        public string GetKeyName()
        {
            return KEY_NAME;
        }

        public string GetLoadPath()
        {
            return CONFIG_PATH;
        }";

        public string GetTSClass()
        {
            var sb = new StringBuilder();
            sb.AppendLine("    export class config {");

            foreach (var filed in fileds)
            {
                if (filed.mtype == "skip" || filed.mtype == "") continue;
                sb.AppendLine("        " + filed.GetTSCode());
            }

            sb.AppendLine("    }");

            if (isConst)
            {
                sb.AppendLine("    export var data : {0}.config;".ReplaceAll("{0}", className));
            }
            else
            {
                sb.AppendLine("    export var data : {[key: number]: {0}.config};".ReplaceAll("{0}", className));
                sb.AppendLine("    export var dataList : {0}.config[];".ReplaceAll("{0}", className));
                sb.AppendLine("    export var lastData : {0}.config;".ReplaceAll("{0}", className));
            }
            sb.AppendLine("    export const path = \"res/config/{0}.json\";".ReplaceAll("{0}", className));
            sb.AppendLine("}");

            return sb.ToString();
        }

        public string GetString(string savePath)
        {
            var sb = new StringBuilder();
            sb.AppendLine(IMPORT);
            sb.AppendFormat(HEAD, nameSpace);
            sb.AppendLine(LEFT_C);

            // 生成数据class
            sb.AppendFormat(CLASS_NAME_WITHIN_SUB, className, "LTGame.IConfigItem");
            sb.AppendLine("    " + LEFT_C);

            foreach (var filed in fileds)
            {
                if (filed.mtype == "skip" || filed.mtype == "") continue;
                sb.AppendLine("        " + filed.ToString());
            }

            sb.AppendLine(ID_INTERFACE);

            sb.AppendLine("    " + right_C);

            // 生成Config,用于存储List<自定义结构>
            sb.AppendFormat(CLASS_NAME_WITHIN_SUB, className + "Config", "LTGame.IConfig");
            sb.AppendLine("    " + LEFT_C);
            sb.AppendFormat(CONFIG_PATH, savePath);
            sb.AppendFormat(CONFIG_LIST, className);
            sb.AppendFormat(KEY_NAME, className);
            sb.AppendLine(CONFIG_INTERFACE.ReplaceAll("{0}", className));
            sb.AppendLine("    " + right_C);

            sb.AppendLine(right_C);


            return sb.ToString();
        }
    }

    class CSFiled
    {
        public string name; // 字段名字
        public string region; // 字段属性
        public string mtype; // 字段类型
        public int index; // 字段索引

        public const string STR = "public {0} {1}; // {2}";
        public const string TS_FORMAT = "/** {0} */ readonly {1}: {2};";

        public string GetTSCode()
        {
            var wrapType = mtype;
            if (wrapType == "int" || wrapType == "float")
            {
                wrapType = "number";
            }
            else if (wrapType == "int[]" || wrapType == "float[]")
            {
                wrapType = "number[]";
            }
            return string.Format(TS_FORMAT, region, name, wrapType);
        }

        public override string ToString()
        {
            return string.Format(STR, mtype, name, region);
        }
    }
}
