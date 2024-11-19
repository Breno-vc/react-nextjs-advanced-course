import { Meta, StoryObj } from '@storybook/react'

import Main from '../Main/index'

export default {
  title: 'components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const WithProps: StoryObj = {
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
}
