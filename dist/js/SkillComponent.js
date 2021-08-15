/**
 * @author 어진석
 * @description Vue.js 컴포넌트
 */
export class SkillComponent {
    constructor() {
        Vue.component('skill-component', {
            template: `
                <div class="col-sm">
                    <div class="card" v-on:mouseover="hover($event)" v-on:mouseout="leave($event)">
                        <img class="card-img-top" width="256" height="256" :src="src" alt="Card image cap">
                        <div class="card-body">
                        <p class="card-text text-center">{{ getFullText }}</p>
                        </div>
                    </div>                        
                </div>
            `,
            data: function(id) {
                
                const {normal, imgsrc} = this;
                
                return {
                    src: imgsrc,
                    text: normal,
                }
            },
            methods: {
                hover: function() {
                    this.text = this.status;
                },
                leave: function() {
                    this.text = this.normal;
                }
            },
            computed: {
                getFullText: function() {
                    return this.text;
                }
            },
            props: [
                "imgsrc",
                "normal",
                "status"
            ]
        });
    }
}

