const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-primary mb-4 md:mb-0">
            Netoria
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © 2024 Netoria. ყველა უფლება დაცულია.
            </p>
            <p className="text-sm text-muted-foreground/80 mt-1">
              თანამედროვე ვებ-განვითარების სერვისები
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;