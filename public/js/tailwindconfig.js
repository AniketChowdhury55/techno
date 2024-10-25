
tailwind.config = {
    theme: {
        extend:{
        gridTemplateColumns:{
            'auto':'repeat(auto-fit, minmax(200px, 1fr))'
        },
        colors:{
            darkTheme: '#11001F'
        }
    }
},
    darkMode: 'selector'
}

// light mode and dark mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
  }