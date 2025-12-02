$(document).ready(function () {

    $("#iconomenu").click(function () {
        $("#menumovil").slideToggle();
    });

    var indiceSlide = 0;
    var $slides = $(".slide-principal");

    function mostrarSlide(i) {
        $slides.hide();
        $slides.eq(i).fadeIn();
    }

    mostrarSlide(indiceSlide);

    $("#btn-siguiente").click(function () {
        indiceSlide++;
        if (indiceSlide >= $slides.length) {
            indiceSlide = 0;
        }
        mostrarSlide(indiceSlide);
    });

    $("#btn-anterior").click(function () {
        if (indiceSlide === 0) {
            indiceSlide = $slides.length - 1;
        } else {
            indiceSlide--;
        }
        mostrarSlide(indiceSlide);
    });

    $(".tarjeta-servicio").not(".tarjeta-morada").click(function () {
        $(this).find(".parrafo-servicio").slideToggle();
    });

    $("#btn-modal").click(function () {
        $("#fondo-modal")
            .css("display", "flex")
            .hide()
            .fadeIn();
    });

    $("#cerrar-modal").click(function () {
        $("#fondo-modal").fadeOut();
    });

    function animarBeneficios() {
        var scrollTop = $(window).scrollTop();
        var altoVentana = $(window).height();

        $(".beneficio").each(function () {
            var $elem = $(this);
            var topElemento = $elem.offset().top;
            var alturaElemento = $elem.outerHeight();

            var limiteInferior = scrollTop + altoVentana - 80;
            var limiteSuperior = scrollTop - alturaElemento / 2;

            if (topElemento < limiteInferior && topElemento > limiteSuperior) {
                if (!$elem.hasClass("visible")) {
                    $elem.addClass("visible");
                }
            } else {
                if ($elem.hasClass("visible")) {
                    $elem.removeClass("visible");
                }
            }
        });
    }

    animarBeneficios();
    $(window).on("scroll", animarBeneficios);

    var indicePrograma = 0;
    var $programas = $(".item-programa");

    function mostrarPrograma(i) {
        $programas.removeClass("activo").hide();
        $programas.eq(i).addClass("activo").fadeIn();
    }

    if ($programas.length > 0) {
        mostrarPrograma(indicePrograma);
    }

    $("#prog-siguiente").click(function () {
        indicePrograma++;
        if (indicePrograma >= $programas.length) {
            indicePrograma = 0;
        }
        mostrarPrograma(indicePrograma);
    });

    $("#prog-anterior").click(function () {
        if (indicePrograma === 0) {
            indicePrograma = $programas.length - 1;
        } else {
            indicePrograma--;
        }
        mostrarPrograma(indicePrograma);
    });

    $("[data-fancybox='galeria']").fancybox();

    $(".encabezado-precio").click(function () {
        var $item = $(this).closest(".item-precio");
        var $panel = $item.find(".contenido-precio");

        if ($panel.is(":visible")) {
            $(".contenido-precio").slideUp();
        } else {
            $(".contenido-precio").slideUp();
            $panel.slideDown();
        }
    });

    $("#btn-subir").click(function () {
        $("html, body").animate({
            scrollTop: $("#inicio").offset().top
        }, 600);
    });

});