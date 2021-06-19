<template>
  <label class="checkbox" :class="{ ['checkbox--big']: !!big }">
    <input type="checkbox" />
    <span class="swtich">
      <span class="swtich__toggle">
        <el-icon :name="icon" />
      </span>
    </span>
    <span v-if="!!label" class="label">{{ label }}</span>
  </label>
</template>

<script>
  export default {
    name: 'el-checkbox',
    props: {
      big: {
        type: Boolean,
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
      },
      label: {
        type: String,
      }
    }
  }
</script>

<style>
  .checkbox {
    --width: 36px;
    --height: 20px;
    --margin: 2px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-end;
    user-select: none;
  }

  .checkbox--big {
    --width: 46px;
    --height: 30px;
    --margin: 4px;
  }

  .checkbox span {
    display: block;
    color: var(--color-red);
    transition: color 300ms;
    will-change: color;
  }

  .checkbox input:checked ~ span {
    color: var(--color-green);
  }

  .checkbox .swtich {
    position: relative;
    background-color: currentColor;
    width: var(--width);
    height: var(--height);
    border-radius: calc(var(--width) * 0.5);
    cursor: pointer;
    will-change: background-color;
  }

  .checkbox .swtich__toggle {
    display: block;
    position: absolute;
    top: var(--margin);
    left: var(--margin);
    width: calc(var(--height) - (var(--margin) * 2));
    height: calc(var(--height) - (var(--margin) * 2));
    border-radius: 50%;
    background-color: var(--color-light);
    pointer-events: none;
    transition: transform 300ms;
    will-change: transform;
  }

  .checkbox input:checked ~ .swtich .swtich__toggle {
    transform: translateX(calc(var(--width) - var(--height)));
  }

  .swtich__toggle svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: var(--color-red);
    transition: fill 300ms;
    will-change: fill;
  }

  .checkbox input:checked ~ span .swtich__toggle svg {
    fill: var(--color-green);
  }

  .checkbox .label {
    font-size: 10px;
    line-height: 12px;
    font-weight: var(--font-weight-bold);
    margin: 5px -1px 0 0;
  }

  .checkbox input {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
</style>
