var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log("".concat(_this.fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this.jobTitle, "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 ").concat(_this.hourlyRate * _this.workingHoursPerWeek, "\uB2EC\uB7EC\uC774\uB2E4."));
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.fullName = "민수";
employee1.age = 20;
employee1.jobTitle = "주니어 웹개발자";
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();
//클래스 속에서 정의된 함수들은
//클래스 내 정의된 변수들에게 접근 가능
//결과적으로 그렇지 않은 함수들보타 상대적으로 적은 매개변수를 가짐
