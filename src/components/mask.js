const mask = () => {
  return /* html */ `
    <div role="button" aria-label="Cerrar" class="mask" [class]="menu || search ? 'mask mask--show' : 'mask'" on="tap:AMP.setState({ menu: false, search: false })"></div>
  `;
};

module.exports = mask;
