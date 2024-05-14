import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * @description Creates an HTML `table` element with a given CSS class and properties,
 * and refs it to a specified DOM ref object.
 * 
 * @param { string } className - CSS class name for the parent element of the `table`.
 * 
 * @param { object } props - table props, which includes the styles and other properties
 * of the table component.
 * 
 * @param { TableRef } ref - 100% width container that will hold the `table` element,
 * providing a reference to it for further manipulation or use.
 * 
 * 		- `ref`: This is an React ref object that provides direct access to a DOM element.
 * 		- `className`: This is a string that represents the class name of the wrapping
 * table element.
 * 		- `...props`: These are any additional props passed to the underlying `table` element.
 * 
 * @returns { HTMLTableElement } a table with a defined class name and properties.
 * 
 * 		- `className`: A string representing the CSS class name for the table.
 * 		- `ref`: A reference to the `table` element, which can be used for further
 * manipulation or mutation of the element.
 * 		- `props`: An object containing additional props for the table, such as styling
 * or behavior.
 */
const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props} />
  </div>
))
Table.displayName = "Table"

/**
 * @description Creates a `<thead>` element with the specified `className` and
 * properties, and also uses the provided `ref` to set its reference.
 * 
 * @param { string } className - class name of the <thead> element.
 * 
 * @param { object } props -
 * 
 * @param { HTMLDivElement in the given code function. } ref - head element in the
 * DOM, which is being rendered by the function.
 * 
 * 		- `ref`: A reference element that represents the top-level `thead` element in
 * the React tree.
 * 		- `className`: A string that specifies the CSS class(es) to apply to the `thead`
 * element.
 * 		- `...props`: An object that contains additional props to be passed to the `thead`
 * element.
 * 
 * @returns { HTMLTableHeaderGroup` element } an HTML `thead` element with a specified
 * class name and properties, referenced by the provided ref object.
 * 
 * 		- `className`: The string value of the `className` prop passed to the component.
 * 		- `props`: The object value of the `props` prop passed to the component.
 * 		- `ref`: A reference to the `ref` prop passed to the component, which is an
 * instance of `Ref`.
 */
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

/**
 * @description Generates a `<tbody>` element with the specified class names and
 * properties, and refs it to the given `ref` object.
 * 
 * @param { string } className - CSS class or classes to apply to the generated <tbody>
 * element.
 * 
 * @param { object } props - 2D array of data that will be displayed within the
 * `<tbody>` component, and it is passed as an argument to the higher-order component
 * as a whole object.
 * 
 * @param { HTMLRef. } ref - element that will be rendered within the `tbody` component,
 * allowing for efficient updating and manipulation of the component's content.
 * 
 * 		- `ref`: A React ref object that provides access to the internal DOM node or DOM
 * node fragment being rendered.
 * 		- `cn`: A prop string that specifies a class name for the rendered element.
 * 
 * @returns { HTMLTableRowElement } a `<tbody>` element with the specified class names
 * and props.
 * 
 * 		- `ref`: The ref object that references the tbody element.
 * 		- `className`: The className property that specifies the class name for the tbody
 * element.
 * 		- `props`: The props object that contains properties and attributes for the tbody
 * element.
 */
const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props} />
))
TableBody.displayName = "TableBody"

/**
 * @description Renders a tfoot element with a custom class name and properties passed
 * as props. The `ref` parameter is used to store a reference to the tfoot element
 * for later use.
 * 
 * @param { string } className - class name to be applied to the tfoot element.
 * 
 * @param { object } props - additional options that can be applied to the <tfoot>
 * element, such as styling classes or attribute values.
 * 
 * @param { React ref. } ref - React Ref object for the tfoot element being created,
 * allowing you to manipulate and store references to the component instance for later
 * use or manipulation.
 * 
 * 		- `ref`: A React ref object that refers to the `<tfoot>` component.
 * 		- `className`: A string that represents the CSS class name for the `<tfoot>`
 * element. It is set to `" bg-muted/50 font-medium [&>tr]:last:border-b-0"`.
 * 		- `...props`: An array of properties that can be passed to the `<tfoot>` component.
 * 
 * @returns { Element` instance of HTML table footer element with the given class
 * names and properties } a `tfoot` element with a background color of muted gray and
 * a font size of medium, with a border-bottom styles defined on the last tr element.
 * 
 * 		- `ref`: This is a ref object that references the `<tfoot>` element.
 * 		- `className`: This is a string that represents the class name of the `<tfoot>`
 * element, with the format of "bg-muted/50 font-medium [&>tr]:last-border-b-0".
 * 		- `...props`: This is an object that represents the props of the `<tfoot>` element.
 */
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(" bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props} />
))
TableFooter.displayName = "TableFooter"

/**
 * @description Generates high-quality documentation for code given to it by defining
 * a React function component that renders a `<tr>` element with a ref and a class
 * name, based on the props passed to it.
 * 
 * @param { string } className - class name of the TR element being generated, which
 * can be combined with other class names using the provided concatenation operator
 * to style the element.
 * 
 * @param { object } props - other props to be passed on to the `tr` component.
 * 
 * @param { object } ref - reference to a DOM element that the returned component
 * will be appended to.
 * 
 * @returns { ReactRef } a React table row with custom styles based on the `state` prop.
 * 
 * 		- `ref`: A React ref object that refers to a `tr` element.
 * 		- `className`: A class string that defines the CSS classes for the element. The
 * string includes two parts: "transition-colors" and "hover:bg-muted/50", which apply
 * transition effects and background color changes when the element is hovered over.
 * Additionally, there is a data attribute `"state=selected"` that applies a different
 * background color when the element's state is set to `selected`.
 * 		- `...props`: An array of additional props that are passed to the `tr` element.
 */
const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      " transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props} />
))
TableRow.displayName = "TableRow"

/**
 * @description Generates high-quality documentation for code passed to it, using the
 * given `className` and `ref`.
 * 
 * @param { string } className - combined class names for the `th` element, including
 * any additional styles provided by the user.
 * 
 * @param { object } props - property bag for the `th` element, allowing the user to
 * specify custom values for any property within the tag.
 * 
 * @param { "ref". } ref - element being created and can be used to assign a reference
 * to the created element for later use.
 * 
 * 		- `ref`: This is an object with several properties, including `current`, `type`,
 * and `hostname`. The `current` property references the current component instance,
 * while the `type` property provides information about the type of component that
 * created the reference. The `hostname` property offers information on the server
 * hosting the ref.
 * 
 * @returns { HTMLThemedElement } an `th` element with a class name consisting of
 * several prefixes and suffixes, used to style the element according to various CSS
 * properties.
 * 
 * 		- `className`: The class name applied to the `th` element, consisting of multiple
 * parts separated by spaces, such as "h-10 px-2 text-left align-middle font-medium
 * text-muted-foreground".
 * 		- `ref`: The ref object passed in as an argument, which is a reference to the
 * `th` element.
 */
const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props} />
))
TableHead.displayName = "TableHead"

/**
 * @description Defines an `td` element with a custom class name, that includes a
 * mixin for a role of checkbox and a translation Y offset.
 * 
 * @param { string } className - combined class name for the `td` element, which is
 * composed of the provided value and any existing class names.
 * 
 * @param { object } props - component's props, which are used to customize the
 * appearance of the `<td>` element.
 * 
 * @param { 'ref'. } ref - element to which the function is being applied, allowing
 * for the manipulation of its properties and children.
 * 
 * 		- `ref`: A reference object with various properties and attributes.
 * 		+ `type`: The type of the referenced component or element (e.g., 'span', 'div',
 * etc.).
 * 		+ `current`: The currently mounted component or element (if a component) or the
 * direct DOM node (if an element).
 * 		+ `defaultPrevented`: A boolean indicating whether the default action of the
 * event was prevented.
 * 		+ `stopPropagation`: A boolean indicating whether the event's propagation was stopped.
 * 		+ `preventDefault`: A boolean indicating whether the event's default action was
 * prevented.
 * 		+ `event`: The SyntheticEvent object representing the event that triggered the
 * ref callback.
 * 
 * @returns { td` element } an SVG `td` element with a custom class name and properties.
 * 
 * 		- `ref`: This is a reference to an instance of a DOM node, specifically a `TD`
 * element.
 * 		- `className`: This is a string that contains the class names for the element.
 * The class names are separated by a space and can include any combination of the
 * following: "p-2", "align-middle", "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
 * 		- `props`: This is an object that contains the props (short for "properties")
 * for the element. These can include any valid HTML attribute, such as `style`,
 * `aria-label`, or `href`.
 */
const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props} />
))
TableCell.displayName = "TableCell"

/**
 * @description Creates a `<caption>` component with a given `className` and additional
 * props, and also provides an mutable reference to the component through the `ref`.
 * 
 * @param { string } className - CSS class name of the caption element to be generated,
 * which can be customized through the use of the `className` property.
 * 
 * @param { object } props - Caption component's properties that can be customized,
 * including the `className` and any other props provided by the parent component.
 * 
 * @param { 🔗React Ref. } ref - reference to the `Caption` component instance that
 * is being created and returned by the function.
 * 
 * 		- `ref`: This is an object that holds information about a reference to an element
 * in the DOM tree. It has various attributes such as `current`, `tagName`, `nodeValue`,
 * and others, depending on the type of element being referenced.
 * 
 * @returns { HTML caption` element } a `Caption` component with custom CSS classes
 * and props.
 * 
 * 		- `className`: a string that represents the class name for the caption element.
 * 		- `ref`: a reference to the `caption` element.
 */
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props} />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
