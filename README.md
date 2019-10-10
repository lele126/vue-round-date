# vue-round-date

> vue横向日期选择

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 参数配置
**minYear**：起始年<br>
**defaultDate**：默认日期<br>
**content**：提示框内容<br>
**windowWidth**：组件宽度<br>

## 实例
首先在项目的入口文件（main.js）中引入
```
import VueRoundDate from 'vue-round-date'
Vue.use(VueRoundDate)
```

然后使用该组件
```
<VueRoundDate :windowWidth="windowWidth" :minYear="minYear" :defaultDate="defaultDate" :content="content" @yearSelected="yearSelected" @monthSelected="monthSelected" @daySelected="daySelected" @dateSelected="dateSelected"></VueRoundDate>
```

```
data(){
	  return{
		  minYear:2005,
		  defaultDate:'2018-8-8',
		  content:'test<br>test',
		  windowWidth:document.documentElement.clientWidth-15,
	  }
  },
  methods:{
  	  yearSelected(year){
  	  		  console.log(year)
  	  },
  	  monthSelected(month){
  	  		  console.log(month)
  	  },
  	  daySelected(day){
  	  		  console.log(day)
  	  },
  	  dateSelected(date){
  		  console.log(date)
  	  }
  }
```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
