
const owner = 'pushme-pullyou';
const repo = 'tootoo-2025';
const accessToken = localStorage.getItem( "githubAccessToken" ) || "";

async function fetchGitHubRepoContents ( owner, repo ) {
  const baseUrl = 'https://api.github.com';
  const token = accessToken;
  const headers = new Headers( {
    'Accept': 'application/vnd.github+json',
    'Authorization': `token ${ token }`
  } );

  const response = await fetch( `${ baseUrl }/repos/${ owner }/${ repo }/git/trees/main?recursive=1`, { headers } );
  const data = await response.json();
  const tree = data.tree;
  const div = document.getElementById( 'github-directory-tree' );

  const createTree = ( items, parentPath ) => {
    const folderContents = document.createElement( 'div' );
    folderContents.className = 'folder-contents';

    const trees = items.filter( item => item.type === 'tree' );
    const blobs = items.filter( item => item.type === 'blob' );

    trees.forEach( item => {
      const details = document.createElement( 'details' );
      const summary = document.createElement( 'summary' );
      summary.textContent = item.path.replace( parentPath, '' );
      details.appendChild( summary );

      const childItems = tree.filter( child => child.path.startsWith( item.path + '/' ) && child.path.split( '/' ).length === item.path.split( '/' ).length + 1 );
      details.appendChild( createTree( childItems, item.path + '/' ) );

      folderContents.appendChild( details );
    } );

    blobs.forEach( item => {
      const fileLink = document.createElement( 'a' );
      fileLink.textContent = item.path.replace( parentPath, '' );
      fileLink.href = `https://github.com/${ owner }/${ repo }/blob/main/${ item.path }`;
      fileLink.target = '_blank';

      const newLine = document.createElement( 'br' );
      folderContents.appendChild( fileLink );
      folderContents.appendChild( newLine ); // Add a line break after each file link
    } );

    return folderContents;
  };

  const topLevelItems = tree.filter( item => item.path.split( '/' ).length === 1 );
  div.appendChild( createTree( topLevelItems, '' ) );

  console.log( "topLevelItems", topLevelItems );

}


fetchGitHubRepoContents( owner, repo );
