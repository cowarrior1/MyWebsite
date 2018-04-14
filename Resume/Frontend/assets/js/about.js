$( document ).ready( function() {

  $("h1").animate({
      'opacity': '1'
  },3000);

  $("p").animate({
      'opacity': '1'
  },5000);

  var entries = [
    { label: 'Javascript'},
    { label: 'NodeJs'},
    { label: 'Amazon Web Services'},
    { label: 'JAVA'},
    { label: 'Handlebarsjs'},
    { label: 'Python'},
    { label: 'C/C++'},
    { label: 'Tensorflow'},
    { label: 'Github'},
    { label: 'Mocha'},
    { label: 'Selenium'},
    { label: 'HTML/HTML5'},
    { label: 'CSS/CSS3'},
    { label: 'Bootstrap'},
    { label: 'SharePoint Online'},
    { label: 'Azure'},
    { label: 'MYSQL'},
    { label: 'IBM Cognos'},
    { label: 'JUnit'},
    { label: 'ExpressJs'},
  ];

  var settings = {

    entries: entries,
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'white',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.5,
    fontFamily: 'Oswald, Arial, sans-serif',
    fontSize: '15',
    fontColor: 'black',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: '11',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal',//bold
    tooltipFontStyle: 'normal',//italic
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10
  };
  $( '.holder' ).svg3DTagCloud( settings );
} );
