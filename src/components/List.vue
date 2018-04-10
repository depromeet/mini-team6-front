<template>
	<div id="notice">
		<div id="title">더치페이 하자!</div>
		<div id="whiteboard">
			<table id="notice-table">
				<thead>
					<tr id="table-header">
						<th></th>
						<th class="date head">Data</th>
						<th class="store head">Title</th>
						<th class="name head">Member</th>
						<th class="nb head">Money</th>
					</tr>
				</thead>

				<tbody>
					<tr class="table-row" v-for="(d, index) in this.dataset" v-bind:key="index">
						<td class="number cell"><div class="num">{{ index + 1 }}</div></td>
						<td class="date cell">{{ d.date }}</td>
						<td class="store cell">{{ d.store }}</td>
						<td class="name cell">{{ d.name }}</td>
						<td class="nb cell">
							<div class="total">
								<div class="total-text">총액</div>
								<div class="total-money">{{ d.total }}</div>
							</div>
							<div class="divide">
								<div class="divide-text">엔빵</div>
								<div class="divide-money">{{ d.total/d.count }}</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script type="text/javascript">
import eventBus from './EventBus.vue';

export default {
	created() {
		// var vm = this
		// this.$axios.get('http://springkjw.pythonanywhere.com/api/partys/', 
		// 	 	{
	 //      headers: { 
	 //      	'Authorization': 'PROJECT token',
	 //      	'Content-Type': 'application/json'
	 //      	}
	 //    	})
	 //      .then((response) => {
	 //        console.log(reponse.data)
	 //      })
	 //      .catch((ex) => {
	 //        console.log('ERROR: ' + ex)
	 //      })
     eventBus.$on('add-list', this.addList)
	},
	data: function () {
		return {
			idx: 1,
			result: null,
            dataset: [
                { date: "18.02.24", 
                  store: "공덕 족발 번개", 
                  name: "이동혁 권태형 권재원 채명준 박예기 한수민 조영은", 
                  count: 7, 
                  total: 280000 },
                { date: "18.04.07", 
                  store: "서초 양꼬치", 
                  name: "김동영 한영수 정현아 김소은", 
                  count: 4, 
                  total: 160000 },
                // {},
                // {},
                // {}
            ]
		}
	},
    methods: {
        addList: function (date, store, name, count, total) {
            if (store !== '') {
                this.dataset.push({
                    date: date,
                    store: store, 
                    name: name,
                    count: count,
                    total: total
                })
            }
        }
    }
}

</script>

<style type="text/css">
	#notice {
	  width: 1920px;
	  height: 1720px;
	  mix-blend-mode: undefined;
	  background-color: #f6f6f6;
	  border: solid 0.5px #f6f6f6;
	}

	#title {
	  width: 183px;
	  height: 19px;
	  padding-top: 84px;
	  padding-left: 884px;
	  mix-blend-mode: undefined;
	  font-family: NanumSquareOTFR;
	  font-size: 26.2px;
	  font-weight: normal;
	  font-style: normal;
	  font-stretch: normal;
	  line-height: 1.35;
	  letter-spacing: normal;
	  text-align: center;
	  color: #5d5d5d;
	}

	#whiteboard {
	  width: 1021px;
	  height: 798px;
	  margin-left: 449px;
	  margin-top: 49px;
	  mix-blend-mode: undefined;
	  background-color: #ffffff;
	  box-shadow: 0px 5px 15px 0 rgba(81, 81, 81, 0.1);
	}

	#notice-table {
		/*padding-top: 62px;*/
		margin-left: 60px;
		padding-right: 59px;
		border-collapse: collapse;
	}

	#table-header {
		border-bottom: solid 2px #dcdcdc;
		height: 90px;
		margin: 0;
	}

	.table-row {
		border-bottom: solid 0.5px #dcdcdc;
		height: 170px;
		font-size: 20.1px;
		margin-top: 31px;
	}

	.number {
	}

	.num{
	  width: 40px;
	  height: 31px;
	  padding-top: 9px;
	  mix-blend-mode: undefined;
	  background-color: #fcac45;
	  color: #ffffff;
	  border-radius: 50%;
	  font-weight: 900;
	  text-align: center;
	  vertical-align: center;
	  font-family: NanumSquareOTFR;
	}

	.date {
		width: 142px;
		padding-left: 44px;
		text-align: left;
		font-family: NanumSquareOTFR;
	}

	.store {
		width: 199px;
		text-align: left;
		font-family: NanumSquareOTFR;
	}

	.name {
		width: 217px;
		text-align: left;
		word-break: keep-all;
		font-family: NanumSquareOTFR;
	}

	.nb {
		font-family: NanumSquareOTFR;
		width: 223px;
		text-align: left;
	}

	.cell{
		vertical-align: top;
		padding-top: 41px;
	}
	.head {
		vertical-align: bottom;
		bottom: 15px;
	}

/*	.total, .divide {
		width: 50px;
	}*/

	.total-text, .divide-text{
		width: 50px;
		float: left;
		text-align: left;
		margin-right: 0px;
		line-height: 1.5;
	} 

	.total-money, .divide-money {
		float: right;
		width: 130px;
		text-align: right;
		line-height: 1.5;
	}

	.total-money {
		font-weight: 300;
		color: rgba(51, 51, 51, 0.6);
	}

	.divide-money {
		color: #7250d1;
		font-weight: 500;
	}

/*	td {
		border-bottom: 1px solid #ccc;
	}*/
</style>