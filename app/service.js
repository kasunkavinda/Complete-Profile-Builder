App.service('shareData',function(){
//	var sharedService={};
//	return {
//	prepForBroadcast:prepForBroadcast,
//	broadCastItem:broadCastItem
//	}	
	return{
		setExamData1:setExamData1,
		getExamData1:getExamData1,
		sharedExamData1:[],
        setExamData2:setExamData2,
        getExamData2:getExamData2,
        sharedExamData2:[],

		setSkillData:setSkillData,
		getSkillData:getSkillData,
		sharedSkillData:[]
		
	}
	

	function setExamData1(data){
		this.sharedExamData1=data;
	}
	function getExamData1() {
        return this.sharedExamData1;
    }

    function setExamData2(data){
        this.sharedExamData2=data;
    }
    function getExamData2() {
        return this.sharedExamData2;
    }
	
	function setSkillData(data){
		this.sharedSkillData=data;
	}
	function getSkillData() {
        return this.sharedSkillData;
    };

});
