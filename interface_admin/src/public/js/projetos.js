var ProjetosAPI = (function () {
  const modal = () => {
    $("#addProjeto").on("click", () => {
      $("#mdlInstrucao").modal("show");
    });

    $("#fecharModal").on("click", () => {
      $("#mdlInstrucao").modal("hide");
    });
  };

  var mask = () => {
    $(".data").mask("00/00/0000");
  };

  var datePicker = () => {
    $(".data").datepicker({
      format: "mm/dd/yyyy",
      locale: 'pt-br',
      dateFormat: 'dd/mm/yy',
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      nextText: 'Proximo',
      prevText: 'Anterior'
    });
  };

  return {
    init: () => {
      modal();
      //mask();

      datePicker();
    },
  };
})();
