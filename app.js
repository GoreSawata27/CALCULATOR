let outputscreen = document.getElementById("output-screen");
        function display(num) {
            outputscreen.value += num;
        }
        function Caculator() {
            try {
                outputscreen.value = eval(outputscreen.value);
            }
            catch (err) {
                alert("invalid")
            }
        }

        function C() {
            outputscreen.value  = ' ' ;
        }

        function d() {
            outputscreen.value = outputscreen.value.slice(0, -1);
        }