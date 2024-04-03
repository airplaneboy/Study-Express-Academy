import TeX from '@/components/TeX';

const TeXExtractor = ({ children }: { children: string }) => {
  return (
    <>
      {children == null
        ? children
        : children.split(/\$\$(.*?)\$\$/g).map((match: string, index: number) =>
            index % 2 === 0 ? (
              match
                .split(/\$ (.*?) \$/g)
                .map((match: string, index: number) => (index % 2 === 0 ? match : <TeX key={index}>{match}</TeX>))
            ) : (
              <TeX displayMode={true} key={index}>
                {match}
              </TeX>
            )
          )}
    </>
  );
};

export default TeXExtractor;
