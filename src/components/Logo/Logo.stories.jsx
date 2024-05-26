import Component from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Logo',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      disable: false
    }
  }
};
export const Default = {
  args: {}
};

export const White = {
  args: { fill: 'white', stroke: 'white' },
  decorators: (Story) => (
    <div style={{ background: 'black' }}>
      <Story {...White?.args} />
    </div>
  )
};

export const Scaled = {
  args: { fill: 'black', stroke: 'black' },
  decorators: [
    (Story) => (
      <header style={{ height: '90px', width: '100svw' }}>
        <Story {...Scaled?.args} />
      </header>
    )
  ]
};
