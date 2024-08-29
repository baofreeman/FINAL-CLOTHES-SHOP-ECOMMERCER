const Logo = () => {
  return (
    <svg
      className="p-1 sm:p-2 fill-gray hover:fill-orange dark:fill-silver dark:hover:fill-orange"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      xmlns={process.env.REACT_APP_SVG_URL}
    >
      <path d="M2.38643 27.4402C1.40218 26.4557 0.742112 25.3189 0.406218 24.0298C0.0781357 22.7328 0.0781355 21.4358 0.406218 20.1389C0.742112 18.8341 1.39827 17.6934 2.37471 16.7168C3.36676 15.7245 4.51115 15.0643 5.80786 14.7362C7.10457 14.408 8.40128 14.408 9.69799 14.7362C10.9947 15.0643 12.1352 15.7206 13.1194 16.7051L15.5566 19.1427L19.1655 15.5331L16.7283 13.0954C15.744 12.111 15.084 10.9742 14.7481 9.68502C14.42 8.38805 14.4161 7.095 14.7364 5.80585C15.0645 4.50888 15.7246 3.36427 16.7166 2.37201C17.7009 1.38757 18.8413 0.73128 20.138 0.403133C21.4347 0.0749851 22.7275 0.0788809 24.0164 0.414841C25.3131 0.742989 26.4536 1.3993 27.4379 2.38374C28.4221 3.36818 29.0783 4.50888 29.4064 5.80585C29.7423 7.095 29.7461 8.38805 29.4181 9.68502C29.0978 10.9898 28.4455 12.1344 27.4613 13.1189L25.0358 15.5448L28.633 19.1427L31.0585 16.7168C32.0427 15.7323 33.1793 15.0721 34.4682 14.7362C35.7649 14.408 37.0577 14.4119 38.3466 14.7479C39.6433 15.076 40.7877 15.7362 41.7798 16.7285C42.764 17.7129 43.4202 18.8536 43.7482 20.1506C44.0841 21.4398 44.0841 22.7289 43.7482 24.0181C43.4202 25.315 42.764 26.4557 41.7798 27.4402C40.7877 28.4324 39.6433 29.0926 38.3466 29.4208C37.0577 29.7411 35.7649 29.7372 34.4682 29.409C33.1871 29.0809 32.0544 28.4246 31.0702 27.4402L28.6447 25.0142L25.0358 28.6238L27.4613 31.0498C28.4455 32.0342 29.0978 33.171 29.4181 34.4602C29.7461 35.7572 29.7461 37.0541 29.4181 38.3511C29.09 39.6481 28.4299 40.7926 27.4379 41.7849C26.4615 42.7615 25.3209 43.4178 24.0164 43.7538C22.7197 44.0819 21.423 44.0819 20.1263 43.7538C18.8452 43.4257 17.7125 42.7693 16.7283 41.7849C15.7362 40.7926 15.0723 39.6519 14.7364 38.3628C14.4083 37.0658 14.4083 35.7689 14.7364 34.4719C15.0801 33.1749 15.7402 32.0381 16.7166 31.0615L19.1655 28.6121L15.5683 25.0142L13.1194 27.4636C12.143 28.4402 10.9986 29.0926 9.68626 29.4208C8.38955 29.7489 7.09286 29.7489 5.79616 29.4208C4.50726 29.0848 3.37068 28.4246 2.38643 27.4402ZM5.31573 24.5103C5.76098 24.9556 6.27654 25.2525 6.86241 25.401C7.45608 25.5572 8.04585 25.5611 8.63172 25.4127C9.21758 25.2642 9.73314 24.9673 10.1784 24.522L12.6273 22.0726L10.1901 19.6349C9.74485 19.1896 9.22539 18.8966 8.63172 18.756C8.04585 18.6075 7.46 18.6075 6.87413 18.756C6.28827 18.9044 5.7688 19.2052 5.31573 19.6584C4.87047 20.1037 4.56974 20.6155 4.41351 21.1936C4.2651 21.7796 4.2651 22.3656 4.41351 22.9516C4.56974 23.5454 4.87047 24.0649 5.31573 24.5103ZM19.6576 10.1655L22.0948 12.6032L24.5203 10.1772C24.9733 9.72409 25.2702 9.20843 25.4108 8.63026C25.5592 8.04429 25.5553 7.45439 25.3991 6.8606C25.2507 6.27462 24.9538 5.75896 24.5085 5.31362C24.0633 4.86828 23.5477 4.57138 22.9619 4.42293C22.376 4.27449 21.7902 4.27449 21.2043 4.42293C20.6263 4.56357 20.1107 4.86046 19.6576 5.31362C19.2124 5.75896 18.9077 6.27462 18.7437 6.8606C18.5953 7.44658 18.5953 8.03256 18.7437 8.61853C18.9077 9.20451 19.2124 9.72017 19.6576 10.1655ZM30.8878 22.0843L33.3133 24.5103C33.7585 24.9556 34.2702 25.2564 34.8483 25.4127C35.4341 25.5611 36.7023 25.5572 37.2804 25.401C37.8662 25.2525 38.3857 24.9517 38.8387 24.4986C39.2918 24.0454 39.5886 23.5297 39.7293 22.9516C39.8855 22.3734 39.8894 21.7913 39.741 21.2054C39.5926 20.6194 39.2957 20.1037 38.8505 19.6584C38.3974 19.2052 37.8779 18.9044 37.292 18.756C36.7062 18.6075 35.4341 18.6075 34.8483 18.756C34.278 18.9044 33.7663 19.2052 33.3133 19.6584L30.8878 22.0843ZM19.6576 38.855C20.1029 39.3004 20.6185 39.5973 21.2043 39.7457C21.7902 39.8942 22.3721 39.8902 22.9502 39.734C23.536 39.5855 24.0516 39.2886 24.4968 38.8433C24.9499 38.3901 25.2507 37.8706 25.3991 37.2846C25.5553 36.7064 25.5592 36.1244 25.4108 35.5384C25.2702 34.9446 24.9773 34.425 24.532 33.9797L22.1065 31.5537L19.6576 34.0031C19.2124 34.4485 18.9116 34.9602 18.7554 35.5384C18.607 36.1244 18.607 36.7103 18.7554 37.2963C18.9038 37.8823 19.2046 38.4019 19.6576 38.855ZM18.4976 22.0843L22.0948 25.6822L25.7037 22.0726L22.1065 18.4747L18.4976 22.0843Z"></path>
    </svg>
  );
};

export default Logo;
