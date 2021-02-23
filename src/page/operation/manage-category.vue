<template>
    <div class="category-tirle">
        <el-button type='primary' size='mini'></el-button>
    </div>

    <div class="category-list">
        <el-table :data="categories" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="deleteItem(scope.row)" type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div class="dialog_box">
        <el-dialog title="删除提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>你确定要删除{{deleteMsg}}吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="doDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
    <div class="navigation-page">

    </div>
</template>

<script>
    import { listCategory } from '../../api/api';
    import { deleteCategory } from '../../api/api';
    import * as dateUtils from '../../utils/date';
    export default {
        name: "manage-category",
        data() {
            return {
                categories: [],
                deleteMsg: "",
                dialogVisible: false,
                id: ''
            }
        },
        methods: {
            deleteItem(item) {
                //先显示对话框，询问用户是否确定要删除
                this.dialogVisible = true; //后面要对应设为false
                this.deleteMsg = item.name;
                this.id = item.id;

            },
            doDelete() {
                dialogVisible = false;
                deleteCategory(id).then(res => {
                    if (res.code === 20000) {
                        //删除成功
                        this.$message({
                            type: 'success',
                            center: true,
                            message: res.message
                        })
                    }
                })
            }
        },
        mounted() {
            //返回的是一个Promise，直接then拿取resolve返回的数据
            listCategory().then(res => {
                console.log(res);
                if (res.code === 20000) {
                    this.categories = res.data;
                }
            })
        }
    }
</script>

<style scoped>

</style>