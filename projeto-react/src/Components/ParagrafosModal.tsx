interface RepoItemProps {
    name: string
    value: string
    html_url?: boolean
  }
  
  const ParagrafosModal = ({ name, value, html_url }: RepoItemProps) => {
    return (
      <div className="w-full bg-slate-50 p-2 lg:p-3">
        <p className="text-xs text-[#6A6F73]">{name}</p>
        {html_url ? (
          <a href={value}>
            <p className="overflow-hidden text-sm text-[#202E49] text-ellipsis break-all underline font-medium">{value}</p>
          </a>
        ) : (
          <p className="font-medium text-[#202E49] text-sm">{value}</p>
        )}
      </div>
    )
  }
  
  export default ParagrafosModal