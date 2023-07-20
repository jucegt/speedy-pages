const mask = function () {
  return /* html */ `
    <div tabindex="1" role="button" aria-label="Cerrar" class="mask" [class]="menu || search ? 'mask mask--show' : 'mask'" on="tap:AMP.setState({ menu: false, search: false })"></div>
  `;
};

module.exports = mask;
