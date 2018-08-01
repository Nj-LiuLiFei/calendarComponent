function lfCalendar(conf){
    var calendar={
        "data":{
            "id":null,
            "el":null,
            "origin":7,
            "theadEl":null,
            "tbodyEl":null,
            "week":["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],
            "monthArray":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
            "year":"",
            "month":"",
            "day":"",
            "time":"",
            "a_year":"",
        },
        "onSelect":conf.onSelect,
        "onChange":conf.onChange,
        "init":function(){
            if(!(this.isElementExist())) {
                return false;
            }
            this.data.el=$(conf.id);
            this.renderCalendarBox();

        },
        "renderCalendarBox":function(){
            if(this.data.el == null ) {
                return false;
            }
            this.setDate();
            el=this.data.el;
            el.html("");
            el.append("<div class='calendarBox'></div>");
            el.find(".calendarBox").append("<div class='calendar-select_row'></div>");
            var row=el.find(".calendar-select_row");
            row.append("<div class='_wx_A'></div>");
            row=row.find("._wx_A");
            row.append("<a class='_wx_A_1' href='#'><i class='fa fa-angle-left'></i></a>");
            row.append("<a class='_wx_A_2' href='#'><i class='fa fa-angle-right'></i></a>");
            row.append("<a class='_wx_A_3 selectyear-month' href='#'>" +
                "<span class='year'>"+this.data.year+"</span>年" +"<span class='month'>"+this.data.month+"</span>月" +
                "</a>");
            row.append("<a class='_wx_A_4 selectyear-month-i' href='#'><i class='fa fa-angle-down'></i></a>");

            el.find(".calendarBox").append("<div class='calendar-thead'></div>");
            this.data.theadEl=el.find(".calendarBox").find(".calendar-thead");
            if(!this.isOriginNumber()){
                alert();
                return false;
            }
            var thead=this.data.theadEl,
                 text="",
                sclass="",
                num=this.data.origin;

            for(var i=0; i< 7; i++) {
                switch (num){
                    case 1:text = this.data.week[num-1]; break;
                    case 2:text = this.data.week[num-1]; break;
                    case 3:text = this.data.week[num-1]; break;
                    case 4:text = this.data.week[num-1]; break;
                    case 5:text = this.data.week[num-1]; break;
                    case 6:text = this.data.week[num-1]; break;
                    case 7:text = this.data.week[num-1]; break;
                }
                thead.append("<div class='_wx_F1 _wx_G"+(i+1)+"'>"+text+"</div>");
                num++;
                if(num > 7) num=1;
            }

            $("body").append("<div class='calendar-selectBox'><div></div></div>");
            var b=$(".calendar-selectBox>div");
            b.append("<div class='calendar-selectBox-thead'></div>");
            var a=b.find(".calendar-selectBox-thead");
            a.append("<a href=\"#\"><i class=\"fa fa-angle-left a-left\"></i></a>");
            a.append("<span><span class=\"c-s-thead-yeart\"></span>年</span>");
            a.append("<a href=\"#\"><i class=\"fa fa-angle-right a-right\"></i></a>");
            b.append("<ul class='calendar-selectBox-month-list'></ul>");
            a=b.find(".calendar-selectBox-month-list");

            for(var i=0;i<this.data.monthArray.length;i++) {
                if( (i+1) == this.data.month) {
                    a.append("<li class=''>"+this.data.monthArray[i]+"</li>");
                }else {
                    a.append("<li>"+this.data.monthArray[i]+"</li>");
                }
            }
            b.append("<div class=\"calendar-b-row\"><a href=\"#\">转到今天</a></div>");
            b.append("<i class=\"peekShadowAll\"></i>");

            el.find(".calendarBox").append("<div class='calendar-tbody'></div>");
            this.data.tbodyEl=b=el.find(".calendarBox>.calendar-tbody");
            for(var i=0 ;i< 6;i++) {
                b.append("<div class='_ct_A_"+(i+1)+" _ct_row'>");
                a=b.find("._ct_row").last();
                for(var j=0 ;j<7 ;j++) {
                    a.append("<div class='_wx_G"+(j+1)+"'><div class='day'></div><div class='message'></div></div>");
                }
            }
            this.renderDayView();
            this.bingEvent(this);
        },
        "renderDateCallback":conf.renderDateCallback,
        "refresh":function(){
          if(typeof  this.renderDateCallback == "function") {
              var n=this.data.tbodyEl,
                  a=this;
              n.find("._ct_A_1>div").each(function(index){
                  $(this).find(".message").html("");
                  $(this).find(".message").attr("style","");
                  if($(this).find(".day").text() != "") {
                      var b=a.renderDateCallback($(this).find(".day").attr("date"));
                      $(this).find(".message").html(b.html);
                      $(this).find(".message").attr("style",b.style);
                  }
              });
              n.find("._ct_A_2>div").each(function(index){
                  $(this).find(".message").html("");
                  $(this).find(".message").attr("style","");
                  if($(this).find(".day").text() != "") {
                      var b=a.renderDateCallback($(this).find(".day").attr("date"));
                      $(this).find(".message").html(b.html);
                      $(this).find(".message").attr("style",b.style);
                  }
              });
              n.find("._ct_A_3>div").each(function(index){
                  $(this).find(".message").html("");
                  $(this).find(".message").attr("style","");
                  if($(this).find(".day").text() != "") {
                      var b=a.renderDateCallback($(this).find(".day").attr("date"));
                      $(this).find(".message").html(b.html);
                      $(this).find(".message").attr("style",b.style);
                  }
              });
              n.find("._ct_A_4>div").each(function(index){
                  $(this).find(".message").html("");
                  $(this).find(".message").attr("style","");
                  if($(this).find(".day").text() != "") {
                      var b=a.renderDateCallback($(this).find(".day").attr("date"));
                      $(this).find(".message").html(b.html);
                      $(this).find(".message").attr("style",b.style);
                  }
              });
              n.find("._ct_A_5>div").each(function(index){
                  $(this).find(".message").html("");
                  $(this).find(".message").attr("style","");
                  if($(this).find(".day").text() != "") {
                      var b=a.renderDateCallback($(this).find(".day").attr("date"));
                      $(this).find(".message").html(b.html);
                      $(this).find(".message").attr("style",b.style);
                  }
              });
              n.find("._ct_A_6>div").each(function(index){
                  $(this).find(".message").html("");
                  $(this).find(".message").attr("style","");
                  if($(this).find(".day").text() != "") {
                      var b=a.renderDateCallback($(this).find(".day").attr("date"));
                      $(this).find(".message").html(b.html);
                      $(this).find(".message").attr("style",b.style);
                  }
              });
          }
        },
        "renderDayView":function(){
            var input=this.getDate();
            var totalDay=new Date(input.year,input.month,0).getDate();
            var toDay=new Date().getDate();
            var week=new Date(input.year+"-"+input.month).getDay(),
                number=1;
            //console.log(input,totalDay,week);
            var n=this.data.tbodyEl;
            n.find("._ct_A_1>div").each(function(index){
                $(this).find(".message").html("");
                $(this).find(".message").attr("style","");
                if(index >= week) {
                    $(this).find(".day").html(number++);
                    $(this).find(".day").attr("date",input.year+"-"+input.month+"-"+(number-1));
                }else {
                    $(this).find(".day").html("");
                    $(this).find(".day").attr("date","");
                }
            });
            n.find("._ct_A_2>div").each(function(index){
                $(this).find(".message").html("");
                $(this).find(".message").attr("style","");
                $(this).find(".day").html(number++);
                $(this).find(".day").attr("date",input.year+"-"+input.month+"-"+(number-1));
            });
            n.find("._ct_A_3>div").each(function(index){
                $(this).find(".message").html("");
                $(this).find(".message").attr("style","");
                $(this).find(".day").html(number++);
                $(this).find(".day").attr("date",input.year+"-"+input.month+"-"+(number-1));
            });
            n.find("._ct_A_4>div").each(function(index){
                $(this).find(".message").html("");
                $(this).find(".message").attr("style","");
                if(number <= totalDay){
                    if(number == toDay && (new Date().getFullYear() == input.year) && ((new Date().getMonth()+1) == input.month)) {
                        $(this).addClass("selected");
                    }else {
                        $(this).removeClass("selected");
                    }
                    $(this).find(".day").html(number++);
                    $(this).find(".day").attr("date",input.year+"-"+input.month+"-"+(number-1));
                }else {
                    $(this).find(".day").html("");
                    $(this).find(".day").attr("date","");
                }
            });
            n.find("._ct_A_5>div").each(function(index){
                $(this).find(".message").html("");
                $(this).find(".message").attr("style","");
                if(number <= totalDay) {
                    if(number == toDay && (new Date().getFullYear() == input.year) && ((new Date().getMonth()+1) == input.month)) {
                        $(this).addClass("selected");
                    }else {
                        $(this).removeClass("selected");
                    }
                    $(this).find(".day").html(number++);
                    $(this).find(".day").attr("date",input.year+"-"+input.month+"-"+(number-1));
                }else {
                    $(this).find(".day").html("");
                    $(this).find(".day").attr("date","");
                }
            });
            if(number <= totalDay){
                n.find("._ct_A_6").show();
                n.find("._ct_A_6>div").each(function(index){
                    $(this).find(".message").html("");
                    $(this).find(".message").attr("style","");
                    if(number <= totalDay) {
                        if(number == toDay && (new Date().getFullYear() == input.year) && ((new Date().getMonth()+1) == input.month)) {
                            $(this).addClass("selected");
                        }else {
                            $(this).removeClass("selected");
                        }
                        $(this).find(".day").html(number++);
                        $(this).find(".day").attr("date",input.year+"-"+input.month+"-"+(number-1));
                    }else {
                        $(this).find(".day").html("");
                        $(this).find(".day").attr("date","");
                    }
                });
            }else {
                n.find("._ct_A_6").hide();
            }

        },
        "setWeek":function(){

        },
        "getWeek":function(){
            return this.data.week;
        },
        "setOrigin":function(){

        },
        "setDate":function(){
            var a=new Date();
            this.data.year=a.getFullYear();
            this.data.month=a.getMonth()+1;
            this.data.day=a.getDate();
            $(this.data.id+">.calendarBox>.calendar-select_row>._wx_A>.selectyear-month>.year").text(this.data.year);
            $(this.data.id+">.calendarBox>.calendar-select_row>._wx_A>.selectyear-month>.month").text(this.data.month);
        },
        "updateDate":function(year,month){
            var reg = /^[1-9]\d*$/ //匹配正整数;
            if(reg.test(year) && reg.test(month)){
                this.data.year=year;
                this.data.month=month;
                $(this.data.id+">.calendarBox>.calendar-select_row>._wx_A>.selectyear-month>.year").text(year);
                $(this.data.id+">.calendarBox>.calendar-select_row>._wx_A>.selectyear-month>.month").text(month);

                this.renderDayView();
                return true;
            }
            return false;
        },
        "getDate":function(){
            var input={
                "year":this.data.year,
                "month":this.data.month,
                "day":this.data.day,
            }

            return input;
        },
        "isElementExist":function(){
            var el = $(conf.id);
            if(el.length == 0) {
                console.log("生成失败!请确认指定的id或class元素是否存在");
                return false;
            }
            this.data.id=conf.id;
            return true;
        },
        "isOriginNumber":function(){
            var reg = /^[1-9]\d*$/ //匹配正整数;
            if(!reg.test(this.data.origin)) {
                return false;
            }
            if(this.data.origin > 8) this.data.origin=1;
            return true;
        },
        "isDayNumber":function(day){
            var reg = /^[1-9]\d*$/ //匹配正整数;
            if(reg.test(day)){
                return true;
            }
            return false;
        },
        "isMonthNumber":function(month){
            var reg = /^[1-9]\d*$/ //匹配正整数;
            if(reg.test(month)){
                return true;
            }
            return false;
        },
        "isYearNumber":function(year){
            var reg = /^[1-9]\d*$/ //匹配正整数;
            if(reg.test(year)){
                return true;
            }
            return false;
        },
        "isDateNumber":function(year,month,day){
            var reg = /^[1-9]\d*$/ //匹配正整数;
            if(reg.test(year) && reg.test(month) && reg.test(day)){
                return true;
            }
            return false;
        },
        "bingEvent":function(n){
           $(this.data.id+" .selectyear-month").on("click",function(e){
              var input=n.getDate();
              $(".calendar-selectBox >div >.calendar-selectBox-thead>span>.c-s-thead-yeart").text(input.year);
              $(".calendar-selectBox>div>.calendar-selectBox-month-list li").removeClass("selected");
              $(".calendar-selectBox>div>.calendar-selectBox-month-list li").eq(input.month-1).addClass("selected");
              var op=$(this).offset();
              $(".calendar-selectBox").css({
                  "left":op.left,
                  "top":op.top+40,
              }).toggle();
               e.stopPropagation();
           });
           $(this.data.id+" .selectyear-month-i").on("click",function(e){
               var input=n.getDate();
               $(".calendar-selectBox >div >.calendar-selectBox-thead>span>.c-s-thead-yeart").text(input.year);
               $(".calendar-selectBox>div>.calendar-selectBox-month-list li").removeClass("selected");
               $(".calendar-selectBox>div>.calendar-selectBox-month-list li").eq(input.month-1).addClass("selected");
               var op=$(".selectyear-month").offset();
               $(".calendar-selectBox").css({
                   "left":op.left,
                   "top":op.top+40,
               }).toggle();
               e.stopPropagation();
           });
           $(".calendar-selectBox").on("click",function(e){
               e.stopPropagation();
           });
           $(".calendar-selectBox .calendar-selectBox-thead .a-left").on("click",function(){
               var reg = /^[1-9]\d*$/ //匹配正整数;
               var a=$(".calendar-selectBox>div>.calendar-selectBox-thead>span>.c-s-thead-yeart");
               if(reg.test(a.text())){
                   a.text(parseInt(a.text())-1);
                   var input=n.getDate();
                   $(".calendar-selectBox>div>.calendar-selectBox-month-list li").removeClass("selected");
                   if((new Date().getFullYear()) == a.text())
                   $(".calendar-selectBox>div>.calendar-selectBox-month-list li").eq(input.month-1).addClass("selected");
               };
           });
           $(".calendar-selectBox .calendar-selectBox-thead .a-right").on("click",function(){
                var reg = /^[1-9]\d*$/ //匹配正整数;
                var a=$(".calendar-selectBox>div>.calendar-selectBox-thead>span>.c-s-thead-yeart");
                if(reg.test(a.text())){
                    a.text(parseInt(a.text())+1);
                    var input=n.getDate();
                    $(".calendar-selectBox>div>.calendar-selectBox-month-list li").removeClass("selected");
                    if((new Date().getFullYear()) == a.text())
                    $(".calendar-selectBox>div>.calendar-selectBox-month-list li").eq(input.month-1).addClass("selected");

                };
            });
           $(".calendar-selectBox>div>.calendar-selectBox-month-list li").on("click",function(){
                if(n.updateDate($(".calendar-selectBox>div>.calendar-selectBox-thead>span>.c-s-thead-yeart").text(),$(this).index()+1)){
                    $(this).siblings().removeClass("selected");
                    $(this).addClass("selected");
                    if(typeof n.onChange == "function")
                    n.onChange();
                }
               $(".calendar-selectBox").hide();
            });
           $(".calendar-selectBox>div>.calendar-b-row a").on("click",function(){
               n.setDate();
               var input=n.getDate();
               $(".calendar-selectBox>div>.calendar-selectBox-thead>span>.c-s-thead-yeart").text(input.year);
               $(".calendar-selectBox>div>.calendar-selectBox-month-list li").removeClass("selected");
               $(".calendar-selectBox>div>.calendar-selectBox-month-list li").eq(input.month-1).addClass("selected");
               n.renderDayView();
               if(typeof n.onChange == "function")
               n.onChange();
               $(".calendar-selectBox").hide();
            });
           $(this.data.id+">.calendarBox>.calendar-select_row>._wx_A>._wx_A_1").on("click",function(){
               var a=$(this).siblings("._wx_A_3").find(".year").text();
               var b=$(this).siblings("._wx_A_3").find(".month").text();
               var reg = /^[1-9]\d*$/ //匹配正整数;
               if(reg.test(a) && reg.test(b)){
                   n.updateDate(a-1,b);
               }
               n.onChange();

           });
           $(this.data.id+">.calendarBox>.calendar-select_row>._wx_A>._wx_A_2").on("click",function(){
               var a=$(this).siblings("._wx_A_3").find(".year").text();
               var b=$(this).siblings("._wx_A_3").find(".month").text();
               var reg = /^[1-9]\d*$/ //匹配正整数;
               if(reg.test(a) && reg.test(b)){
                   n.updateDate(parseInt(a)+1,b);
               }
               n.onChange();
           });
           $(this.data.id+">.calendarBox>.calendar-tbody>div>div").on("click",function(){
               var input={
                   "year":n.getDate().year,
                   "month":n.getDate().month,
                   "day":$(this).find(".day").text(),
               }
               if(n.isDayNumber(input.day)) {
                   if(typeof n.onSelect == "function")
                       n.onSelect(input);
               }

           });
           $(document).click(function(e){
              $(".calendar-selectBox").hide();
              e.stopPropagation();
           });
        },
    }
    calendar.init();
    return calendar;
}