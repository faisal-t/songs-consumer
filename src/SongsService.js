const { Pool } = require('pg');
 
class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongsPlaylist(playlistId) {
    const query = {
      text: `select playlistsongs.id,songs.title,songs.performer from playlistsongs JOIN songs ON playlistsongs.song_id = songs.id where playlistsongs.playlist_id = $1;`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    console.log(result.rows.toString());
    return result.rows;
  }
}

module.exports = SongsService;
