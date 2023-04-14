const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
          showDemo.innerHTML = `<iframe src='../demo/w01/index.html' width="100%" height="100%"/>`;
          break;
        case 'w2':
          showDemo.innerHTML = `<iframe src='../demo/w02-tictactoe_starter/tictactoe_93.html' width="100%" height="100%"/>`;
         break;
         case 'w3':
          showDemo.innerHTML = `<iframe src='../demo/w03-reviews_starter/index.html' width="100%" height="100%"/>`;
         break;
         case 'w4':
          showDemo.innerHTML = `<iframe src='../demo/w04_menu_starter/index.html' width="100%" height="100%"/>`;
         break;
         case 'w5':
          showDemo.innerHTML = `<iframe src='../demo/w05-modal_starter/index.html' width="100%" height="100%"/>`;
         break;
         case 'w6-1':
          showDemo.innerHTML = `<iframe src='../demo/w06-array/p1_93/p1_93.html' width="100%" height="100%"/>`;
         break;
         case 'w6-2':
          showDemo.innerHTML = `<iframe src='../demo/w06-array/p2_93/p2_93.html' width="100%" height="100%"/>`;
         break;
         case 'w6-3':
          showDemo.innerHTML = `<iframe src='../demo/w06-array/p3_93/p3_93.html' width="100%" height="100%"/>`;
         break;
         case 'w7-1':
          showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_93/p1_bmi_93/p1_93.html' width="100%" height="100%"/>`;
         break;
         case 'w7-2':
          showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_93/p2_counter_93/index.html' width="100%" height="100%"/>`;
         break;
         case 'w7-3':
          showDemo.innerHTML = `<iframe src='../demo/w07-midprep_stud_93/p3_tour_93/index.html' width="100%" height="100%"/>`;
         break;
   }
}