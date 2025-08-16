export const Button = ({ className, contents, href }: { className: string, contents: string, href: string }) => {
    let cls = `${className} text`;


    return (
        <div className="button"><a className={cls} href={href} target="_blank">{contents}</a></div>
    )
}
