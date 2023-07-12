const mask = () => {
  return /* html */ `
    <div class="mask" [class]="menu || search ? 'mask mask--show' : 'mask'" on="tap:AMP.setState({ menu: false, search: false })"></div>
  `;
};

module.exports = mask;
