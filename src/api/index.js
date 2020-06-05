import ajax from "./ajax"
// import axios from "axios"
//主页数据
export const reqHome = () => ajax.get('/api/home')
// 商品列表右侧
export const reqcategoryRight = (id) => ajax.get(`/api/categoryRight/${id}`)
// 商品列表左侧
export const reqcategoryLeft = (id) => ajax.get('/api/categoryLeft', id)
export const reqindexCateModulenavitem = (id) => ajax.post(`/api/indexCateModule/navitem`, { id })
export const reqindexCateModulenavList = () => ajax.get('/api/indexCateModule/navList')
export const reqRegister = (user) => ajax.post('/api/register', user)
export const reqLogin = (user) => ajax.post('/api/login', user)
export const reqWorthBuying = () => ajax.get('/api/worthBuying')
export const reqSearchCentent = () => ajax.get('/xhr/search/init.json')

export const reqSearchkeyword = (keywordPrefix) => ajax.post(`/xhr/search/searchAutoComplete.json?keywordPrefix=${keywordPrefix}`)
//请求搜索关键字的商品列表
// https://m.you.163.com/xhr/search/search.json?keyword=电&size=40
export const reqSearchkeywordList = (keyword, size) => ajax.post(`/xhr/search/search.json?keyword=${keyword}&size=${size}`)

export const reqLoadingList = (keyword, size, itemId) => ajax.post(`/xhr/search/search.json?keyword=${keyword}&size=${size}&itemId=${itemId}`)
// 排序 价格从高到低 
export const reqDescList = ({ keyword, size, sortType, floorPrice, upperPrice, descSorted, categoryId }) => ajax.post(`/xhr/search/search.json?keyword=${keyword}&size=${size}&sortType=${sortType}&floorPrice=${floorPrice}&upperPrice=${upperPrice}&descSorted=${descSorted}&categoryId=${categoryId}`)
// https://m.you.163.com/xhr/search/search.json?keyword=%E7%8C%AB%E7%B2%AE&sortType=1&descSorted=false&floorPrice=1&upperPrice=100&size=40

//值得买数据
//https://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=5&exceptIds=
export const reqWorthBuyingList = ({ page, size, exceptIds }) => ajax.post(`topic/v1/find/recAuto.json?page=${page}&size=${size}&exceptIds=${exceptIds}`)
//https://m.you.163.com/xhr/wapitem/rcmd.json
// 商品详情
export const reqgoodsDetails = (obj) => ajax({
  method: 'POST',
  url: '/xhr/wapitem/rcmd.json',
  data: obj
})
