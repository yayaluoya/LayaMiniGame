<template>
    <div class="img_select">
        <el-image
            v-if="imgUrl"
            fit="cover"
            :src="imgUrl">
            <div slot="error">
                <i class="el-icon-picture-outline"></i>
            </div>
            <div slot="placeholder">
                <i class="el-icon-loading"></i>
            </div>
        </el-image>
        <div class="bt_list">
            <div class="select_bt">
                <div>
                    {{imgFile?imgFile.name:'选择图片'}}
                </div>
                <input 
                    type="file" 
                    @change="handleFileChange" 
                    ref="file_input" 
                    accept="image/gif,image/jpeg,image/jpg,image/png"/>
            </div>
            <div class="remove_bt" @click="remove">
                <i class="el-icon-delete"></i>
            </div>
        </div>
    </div>
</template>

<script>
//基于vue2 element-ui的图片选择器 （单个选择）
export default {
    name:"ImgSelect",
    props:{
        size:{  //图片大小  单位 M
            type:Number,
            default:3,
        },
    },
    data(){
        return{
           imgUrl:null,  //图片预览
           imgFile:null, //文件对象
        }
    },
    watch:{  //监听文件的变化，将数据传递出去以及显示预览图
        imgFile(){
            this.imgPreview(this.imgFile); //显示预览图
            this.$emit('change_file',this.imgFile);
        },
    },
    methods:{
        remove(){
            this.imgUrl = null;
            this.imgFile = null;
        },
        imgPreview(file) {  //图片预览
            let that = this;
            // 看支持不支持FileReader
            if (!file || !window.FileReader) return;
            if (/^image/.test(file.type)) {
                // 创建一个reader
                var reader = new FileReader();
                // 将图片将转成 base64 格式
                reader.readAsDataURL(file);
                // 读取成功后的回调
                reader.onloadend = function () {
                    that.imgUrl = this.result;
                }
            }
        },
        handleFileChange(){
            let input_dom = this.$refs.file_input;
            if(input_dom.files[0] && /^image/.test(input_dom.files[0].type)){
                if(input_dom.files[0].size<=this.size*1024*1024){
                    this.imgFile = input_dom.files[0];
                }else{
                    this.$message({
                        showClose: true,
                        message:'大小不能超过'+this.size+'M！',
                        type: 'error',
                        offset:80,
                    });
                }
            }
        },
    },
}
</script>

<style scoped lang="scss">
.img_select{
    width: 100%;
    height: 100%;
    border-radius:2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #f3f3f3;
    transition: all 0.2s;
    .el-image{
        width: 100%; 
        height: 100%;
        min-height: 50px;
        max-height: 800px;
        border-radius: 2px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .bt_list{
        width: 100%; 
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;
        justify-content: stretch;
        line-height: 1.5;
        height: 50px;
        >*{
            cursor: pointer;
        }
        >.select_bt{
            flex: 1;
            width: 0;
            position: relative;
            overflow: hidden;
            font-size: 15px;
            border: none;
            padding: 0px 15px;
            border-right: 1px solid #f3f3f3;
            transition: all 0.2s;
            box-sizing: border-box;
            height: 100%;
            display: flex;
            align-items: center;
            font-weight: bold;
            &:hover{
                background-color: #f3f3f3;
            }
            div{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
                box-sizing: border-box;
            }
            input {
                height: 100%;
                width: 100%;
                font-size: 0px; /* 为了去掉‘未选择任何文件’这几个字，也可以随便弄到哪里*/
                opacity: 0;
                position: absolute;
                left: 0;
                top: 0;
                cursor: pointer;
            }
        }
        >.remove_bt{
            width:fit-content;
            transition: all 0.2s;
            padding: 0 15px;
            height: 100%;
            display: flex;
            align-items: center;
            i{
                font-weight: bold;
                font-size: 20px;
            }
            &:hover{
                color: #ef3f61;
            }
        }
    }
}
</style>
