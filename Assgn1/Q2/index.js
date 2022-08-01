var content = document.getElementsByClassName('content');
        var ques = document.getElementsByClassName('question');
        for (i = 0; i < ques.length; i++) {
            ques[i].addEventListener('click', toggleItem, false);
        }
        function toggleItem() {
            var itemClass = this.parentNode.className;
            for (i = 0; i < content.length; i++) {
                content[i].className = 'content close';
            }
            if (itemClass == 'content close') {
                this.parentNode.className = 'content open';
            }
        }