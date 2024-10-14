import"../../assets/js/fingerprint.js";class d{constructor(){this.warBlockElement=document.querySelector(".war-block"),this.names=["personnel_units","aa_warfare_systems","armoured_fighting_vehicles","artillery_systems","atgm_srbm_systems","cruise_missiles","helicopters","mlrs","planes","special_military_equip","tanks","uav_systems","vehicles_fuel_tanks","warships_cutters"],this.warBlockElement&&this.fetchData()}numberWithCommas(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}fetchData(){this.names.forEach(e=>{const t=this.warBlockElement.querySelector(`[data-type="${e}"]`);t&&t.classList.add("is-loading")}),fetch("https://raw.githubusercontent.com/broqit/war_block/main/test_data.json").then(e=>e.json()).then(e=>{this.updateWarBlock(e),this.names.forEach(t=>{const i=this.warBlockElement.querySelector(`[data-type="${t}"]`);i&&i.classList.add("is-loaded")})})}updateWarBlock(e){const t=e.data;this.names.forEach(i=>{const s=this.warBlockElement.querySelector(`[data-type="${i}"]`);if(s){const o=t.stats[i];o!==0&&s.setAttribute("data-total",this.numberWithCommas(o));const a=t.increase[i];a!==0&&s.setAttribute("data-increase",this.numberWithCommas(a))}})}}new d;class c{constructor(e,t=5){this.container=document.querySelector(e),this.sponsorCountKey=`sponsor_iterator_count_${lang}`,this.sponsorIndexKey=`sponsor_iterator_index_${lang}`,this.sponsorCount=parseInt(localStorage.getItem(this.sponsorCountKey))||t,this.sponsorIndex=parseInt(localStorage.getItem(this.sponsorIndexKey))||0,this.fetchSponsorBlock(this.sponsorIndex)}fetchSponsorBlock(e){fetch(`${current_domain}/get-sponsor-block?index=${e}&except_ids=${this.container.dataset.except}`).then(t=>t.json()).then(t=>{if(t&&t.html){const i=document.createElement("div");i.className="js-partners-card",i.innerHTML=t.html,this.container.replaceWith(i),this.container=i}this.sponsorIndex=(this.sponsorIndex+1)%this.sponsorCount,localStorage.setItem(this.sponsorIndexKey,this.sponsorIndex)})}}/iPhone|iPad|iPod/i.test(navigator.userAgent)&&document.querySelector("body").classList.add("ios");class l{constructor(){this.handleResize(),window.addEventListener("resize",this.handleResize.bind(this))}handleResize(){window.innerWidth>991?this.moveSupportToEnd():this.moveSupportToStart()}moveSupportToEnd(){const e=document.querySelector(".section-default__grid--big"),t=e.querySelector(".section-default__col--news-sidebar .section-default__sticky-inner"),i=e.querySelector(".section-default__col--left-sidebar");e.querySelector(".grid-layer--2cols"),t&&i&&(i.appendChild(t),document.querySelector(".skeleton-widget").remove())}moveSupportToStart(){const e=document.querySelector(".section-default__grid--big"),t=e.querySelector(".section-default__col--left-sidebar .section-default__sticky-inner"),i=e.querySelector(".section-default__col--news-sidebar");t&&i&&i.appendChild(t)}}new l;const h=document.querySelector(".player-widget");if(h){const r=`${main_domain}/files/videoList_liga_main.json`;new PlayerWidget(r)}class u{constructor(){this.leftSidebar=document.querySelector(".section-default__col--left-sidebar"),this.gridLayer=document.querySelector(".grid-layer--2cols"),this.rightSidebar=document.querySelector(".section-default__col--right-sidebar"),this.banner=document.querySelector(".section-default__col--right-sidebar .js-b-block.pc-only")}update(){window.innerWidth>=992&&window.innerWidth<=1199?(this.updateGridContainerHeight(),this.updateSidebarHeight()):this.removeGridContainer()}updateGridContainerHeight(){this.gridContainer||(this.gridContainer=document.createElement("div"),this.gridContainer.className="grid-container",this.gridLayer.parentNode.insertBefore(this.gridContainer,this.gridLayer),this.gridContainer.appendChild(this.gridLayer)),this.gridContainer.style.minHeight=this.leftSidebar.clientHeight+"px"}updateSidebarHeight(){this.banner&&(this.rightSidebar.style.minHeight=this.banner.clientHeight+30+"px")}removeGridContainer(){this.gridContainer&&(this.gridContainer.parentNode.insertBefore(this.gridContainer.firstChild,this.gridContainer),this.gridContainer.parentNode.removeChild(this.gridContainer),this.gridContainer=null)}}const n=new u;window.addEventListener("resize",()=>{n.update()});window.addEventListener("load",()=>{n.update()});window.addEventListener("scroll",()=>{n.update()});new c(".js-partners-card");
