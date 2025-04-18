const es = {
  ui: {
    navigation: {
      home: 'Inicio',
      search: 'Buscar',
      mode: 'Modo',
      menu: 'Menú',
    },
    search: {
      placeholder: 'Buscar',
      results: 'Resultados para:',
    },
    author: {
      tooltip: 'Autor',
    },
    publishedDate: {
      tooltip: 'Fecha de Publicación',
    },
    readingTime: {
      tooltip: 'Tiempo de Lectura',
      short: {
        singular: 'min',
        plural: 'min',
      },
      long: {
        singular: 'minuto de lectura',
        plural: 'minutos de lectura',
      },
    },
    pagination: {
      next: 'Siguiente',
      prev: 'Anterior',
      of: 'de',
    },
    footer: {
      categories: 'Categorías',
      pages: 'Páginas',
      copyright: 'Todos los derechos reservados.',
    },
    contact: {
      name: 'Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar',
    },
    notFound: {
      title: '¡Oooops!',
      subtitle: {
        text: 'Algo salio',
        strong: 'mal...',
      },
      text: 'Lamentablemente, el contenido que buscas no está aquí. Puede que haya un error ortográfico en la dirección web o que haya hecho clic en un enlace de un contenido que ya no existe.',
      contact: {
        prefix: 'Si ha seguido un enlace en este sitio para llegar aquí, por favor, póngase en',
        link: 'contacto con el administrador',
        suffix: 'para que pueda ser corregido.',
      },
      button: 'Volver al inicio',
      postsTitle: 'Artículos que pueden interesarte',
    },
  },
  cms: {
    label: 'Gestor de contenidos',
  },
  posts: {
    singular: 'Artículo',
    plural: 'Artículos',
    title: {
      label: 'Título',
      hint: 'Título que se muestra en el sistema de gestión de contenidos.',
    },
    seo: {
      label: 'SEO',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en los resultados de búsqueda de Google.',
      },
      slug: {
        label: 'Slug',
        hint: 'Estructura de enlace que se muestra en la barra de navegación.',
      },
      description: {
        label: 'Descripción',
        error: 'La descripción debe tener entre 140 y 160 caracteres',
        hint: 'Descripción que se muestra en los resultados de búsqueda de Google.',
      },
    },
    info: {
      label: 'Información',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en la página del artículo.',
      },
      category: {
        label: 'Categoría',
        hint: 'Categoría que se muestra en la página del artículo.',
      },
      date: {
        label: 'Fecha de publicación',
        hint: 'Fecha que se muestra en la página del artículo.',
      },
      author: {
        label: 'Autor',
        hint: 'Nombre que se muestra en la página del artículo.',
      },
      excerpt: {
        label: 'Extracto',
        hint: 'Extracto que se muestra en la página del artículo.',
      },
    },
    heroImage: {
      label: 'Imagen de portada',
      hint: 'Imagen que se muestra en la página del artículo.',
    },
    body: {
      label: 'Cuerpo',
      hint: 'Contenido que se muestra en la página del artículo.',
    },
  },
  categories: {
    singular: 'Categoría',
    plural: 'Categorías',
    title: {
      label: 'Título',
      hint: 'Título que se muestra en el sistema de gestión de contenidos.',
    },
    seo: {
      label: 'SEO',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en los resultados de búsqueda de Google.',
      },
      slug: {
        label: 'Slug',
        hint: 'Estructura de enlace que se muestra en la barra de navegación.',
      },
      description: {
        label: 'Descripción',
        error: 'La descripción debe tener entre 140 y 160 caracteres',
        hint: 'Descripción que se muestra en los resultados de búsqueda de Google.',
      },
      heading: {
        label: 'Encabezado',
        hint: 'Título que se muestra en la página de la categoría.',
      },
    },
    body: {
      label: 'Cuerpo',
      hint: 'Contenido que se muestra en la página de la categoría.',
    },
  },
  authors: {
    singular: 'Autor',
    plural: 'Autores',
    title: {
      label: 'Nombre',
      hint: 'Nombre que se muestra en los artículos.',
    },
    photo: {
      label: 'Foto',
      hint: 'Foto que se muestra en los artículos.',
    },
    email: {
      label: 'Correo Electrónico',
      error: 'El correo electrónico debe ser válido',
      hint: 'Correo electrónico para contactarte.',
    },
  },
  pages: {
    singular: 'Página',
    plural: 'Páginas',
    title: {
      label: 'Título',
      hint: 'Título que se muestra en el sistema de gestión de contenidos.',
    },
    seo: {
      label: 'SEO',
      title: {
        label: 'Título',
        hint: 'Título que se muestra en los resultados de búsqueda de Google.',
      },
      slug: {
        label: 'Slug',
        hint: 'Estructura de enlace que se muestra en la barra de navegación.',
      },
      description: {
        label: 'Descripción',
        error: 'La descripción debe tener entre 140 y 160 caracteres',
        hint: 'Descripción que se muestra en los resultados de búsqueda de Google.',
      },
      heading: {
        label: 'Encabezado',
        hint: 'Título que se muestra en la página.',
      },
    },
    body: {
      label: 'Cuerpo',
      hint: 'Contenido que se muestra en la página.',
    },
    contact: {
      label: 'Mostrar Formulario de Contacto',
      hint: '¿Quieres mostrar el formulario de contacto en esta página?',
    },
  },
  settings: {
    label: 'Configuración',
    branding: {
      label: 'Marca',
      colors: {
        label: 'Colores',
        primary: {
          label: 'Primario',
          hint: 'Color primario utilizado en el sitio web.',
        },
        secondary: {
          label: 'Secundario',
          hint: 'Color secundario utilizado en el sitio web.',
        },
      },
      logo: {
        label: 'Logo',
        multicolor: {
          label: 'Multi-Color',
          hint: 'Código SVG para el logo multicolor.',
        },
        onecolor: {
          label: '1-Color',
          hint: 'Código SVG para el logo a un color.',
        },
      },
      favicon: {
        label: 'Favicon',
        hint: 'Favicon que se muestra en la pestaña del navegador.',
      },
    },
    home: {
      label: 'Pagina de Inicio',
      seo: {
        label: 'SEO',
        title: {
          label: 'Título',
          hint: 'Título que se muestra en los resultados de búsqueda de Google.',
        },
        description: {
          label: 'Descripción',
          error: 'La descripción debe tener entre 140 y 160 caracteres',
          hint: 'Descripción que se muestra en los resultados de búsqueda de Google.',
        },
        heading: {
          label: 'Encabezado',
          hint: 'Título que se muestra en la página de inicio.',
        },
      },
      body: {
        label: 'Cuerpo',
        hint: 'Contenido que se muestra en la página de inicio.',
      },
    },
    navigation: {
      label: 'Navegación',
      categories: {
        label: 'Categorías',
        hint: 'Categorías que se muestran en la barra de navegación.',
        category: 'Categoría',
      },
      pages: {
        label: 'Páginas',
        hint: 'Páginas que se muestran en la barra de navegación.',
        page: 'Página',
      },
    },
    socialMedia: {
      label: 'Redes Sociales',
      links: {
        label: 'Enlaces Sociales',
        hint: 'Enlaces a redes sociales.',
        name: {
          label: 'Nombre',
          hint: 'Nombre de la red social para mostrar el icono.',
        },
        url: {
          label: 'URL',
          error: 'La URL debe comenzar con http:// o https:// para que sea valida',
          hint: 'URL del perfil de la red social.',
        },
      },
    },
    footer: {
      label: 'Pie de Página',
      pages: {
        label: 'Páginas',
        hint: 'Páginas que se muestran en el pie de página.',
        page: 'Página',
      },
    },
  },
};

module.exports = es;
