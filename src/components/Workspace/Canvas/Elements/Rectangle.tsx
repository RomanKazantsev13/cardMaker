import React, { RefObject, useRef, useState } from 'react'
import { Element, setSelectElement } from '../../../../model/Canvas/Element/element'
import { Point } from '../../../../model/Card/card'

import { dispatch } from '../../../../editor'
import { useDragAndDrop } from '../../../../customHooks/useDragAndDrop'
import { getCentreAndSizeOfElement } from '../SelectElement/SelectElementFunction'

interface RectanglePropsType {
    size: { width: number, height: number },
    color: string,
    element: Element,
    selectElement: Element | null,
    setViewEditor: (viewEditor: {view: boolean, state: string}) => void,
    position: { x: number, y: number },
    setPosition: (position: {x: number, y: number}) => void,
    setSize: (size: {width: number, height: number}) => void,
}

export function Rectangle(props: RectanglePropsType) {
    const [position, setPosition] = useState(props.element.centre)
    const ref: RefObject<SVGRectElement> = useRef(null)
    useDragAndDrop(props.element, ref, props.element.centre, setPosition, props.setPosition, props.setViewEditor, props.setSize)
    return (
        <rect
            ref={ref}
            x={position.x}
            y={position.y}
            width={props.size.width}
            height={props.size.height}
            fill={props.color}
            onClick={() => {
            }}
        />
    )
}