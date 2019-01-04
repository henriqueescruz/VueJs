new Vue({
    el: "#app",
    data() {
        return {
            HeroesAlmanac: {
                title: "Super Heroes Almanac",
                subtitle: "<p>The ultimate guide</p>",
                heroes: [
                    {
                        avatar: "https://i.ibb.co/xjLzhxr/ex1-Artboard-1.jpg",
                        heroName: "Captain America",
                        secretIdentity: "Steve Rogers",
                        description:
                            "<p>America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.</p>"
                    },
                    {
                        avatar: "https://i.ibb.co/M93zQ17/ex1-Artboard-3.jpg",
                        heroName: "Iron Man",
                        secretIdentity: "Tony Stark",
                        description:
                            "<p>Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.</p>"
                    },
                    {
                        avatar: "https://i.ibb.co/D1v60km/ex1-Artboard-2.jpg",
                        heroName: "Thor",
                        secretIdentity: "Hot guy",
                        description:
                            "<p>Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.</p>"
                    }
                ]
            }
        };
    },
    methods: {
        returnClass: function (index){
            if (index + 1 >= this.HeroesAlmanac.heroes.length)
                return '';
            else    
                return 'divider';
        }       
    }
});
