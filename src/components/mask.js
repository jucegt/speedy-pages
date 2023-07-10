const mask = () => {
  return /* html */ `
    <div class="mask" [class]="menu || search ? 'mask mask__show' : 'mask'"></div>
  `;
};

module.exports = mask;
