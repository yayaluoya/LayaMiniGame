/**
 * 对象代理工具
 */
export default class ObjectProxyT {
    /** 监听列表 */
    private m_monitorList: {
        /** 监听触发回调执行域 */
        _this: any,
        /** 监听触发回调执行方法 */
        _back: Function,
        /** 源对象 */
        _obj?: object,
        /** 键值 */
        _key?: string,
    }[] = [];

    /**
     * 添加监听
     * 监听某个对象的某个属性是否发生更改
     * 如果可选属性都不填的话则监听全部监听数据属性更改
     * @param _this 监听触发回调执行域
     * @param _back 监听触发回调执行方法
     * @param _obj 目标对象，如果不选则监听全部内容更改
     * @param _key 键名，如果不选则监听全部属性
     */
    public addMonitor<O extends object, K extends keyof O>(_this: any, _back: Function, _obj?: O, _key?: K) {
        //添加到监听列表
        this.m_monitorList.push({
            _this,
            _back,
            _obj,
            _key: _key as string,
        });
    }

    /**
     * 清理回调
     * @param _this 回调执行域
     * @param _back 回调方法
     */
    public clearMonitor(_this: any, _back?: Function) {
        this.m_monitorList = this.m_monitorList.filter((item) => {
            return !(
                item._this == _this
                    //可选的回调
                    && _back ? item._back == _back : true
            );
        });
    }


    /**
     * 设置代理
     * @param _o 源对象
     */
    public setProxy<Data extends object>(_o: Data): Data {
        return this._setProxy(_o) as Data;
    }
    //配合设置代理
    private _setProxy(_o): object {
        //判断是否是普通值类型和方法
        if (typeof _o == "function" || typeof _o != "object" || !_o) {
            return _o;
        }
        //判断是否是可迭代对象和方法
        if (!_o[Symbol.iterator]) {
            //遍历对象设置代理
            for (let _i in _o) {
                _o[_i] = this._setProxy(_o[_i]);
            }
        }
        //返回最终的代理对象
        let _this = this;
        return new Proxy(_o, {
            /***
             *  set 方法
             * @param trapTarget 代理的目标
             * @param key 属性名称
             * @param value 值
             * @param receiver 操作发生的对象
             * @returns {boolean}
             */
            set(trapTarget, key, value, receiver) {
                //修改属性
                let _if: boolean = Reflect.set(trapTarget, key, value, receiver);
                if (_if) {
                    //判断是是不是数组的length属性被修改
                    if (!(Array.isArray(trapTarget) && key == 'length')) {
                        //执行回调
                        _this.proxySet(trapTarget, key, value, receiver);
                    }
                }
                //
                return _if;
            },

            /***
             * get 方法
             * @param trapTarget 代理的目标
             * @param key 属性名称
             * @param receiver receiver 操作发生的对象（通常是代理）
             */
            get(trapTarget, key, receiver) {
                //获取属性
                return Reflect.get(trapTarget, key, receiver);
            },
        });
    }

    /***
     * 代理对象被设置时的回调
     * @param trapTarget 代理的目标
     * @param key 属性名称
     * @param value 值
     * @param receiver 操作发生的对象
     */
    private proxySet(trapTarget, key, value, receiver) {
        // console.log('代理对象被设置', trapTarget, key, value, receiver);
        let _arguments = arguments;
        //执行监听
        this.m_monitorList.forEach((item) => {
            //先判断代理目标
            if (item._obj && item._obj != receiver) {
                return;
            }
            if (item._key && item._key != key) {
                return;
            }
            //执行回调
            item._back.call(item._this, ..._arguments);
        });
    }
}