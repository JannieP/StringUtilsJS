var CaseTypeEnum = {
  lower: 1,
  UPPER: 2,
  Title: 3
};

var stringCase = function(source,caseType){
  if (caseType === CaseTypeEnum.Title){
    return source.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
}
