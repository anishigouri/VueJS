import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {
        console.log('diretiva associada');
        console.log(el);

        let current = 0;

        el.addEventListener('dblclick', () => {
            let increment = binding.value || 90;
            let efeito;

            if(!binding.arg || binding.arg === 'rotate') {
                if(binding.modifiers.reverse) {
                    current -= increment;
                } else {
                    current += increment;
                }

                efeito = `rotate(${current}deg)`;
            } else if(binding.arg == 'scale') {
                efeito = `scale(${increment})`;
            }
            
            

            if(binding.modifiers.animated) el.style.transition = 'transform 0.5s';
            el.style.transform = efeito;
        });
    }

});