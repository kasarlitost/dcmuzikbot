module.exports = {
    footer: "EU4-5 ÇÖPTÜR",
    ping: {
      description: "Gecikmeyi test ediyorum.",
      response: "Pinging...",
      embed: {
        title: "Bot Gecikme",
        responseTime: "- Bot Cevap Süresi : **{latency}ms**",
        websocketPing: "- WebSocket Ping : **{ping}ms**",
        uptime: "- Ayaktayım : **{uptime}**",
        footer: "EU4-5 ÇÖPTÜR"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "Oynatma Listesi Bulunamadı",
          playlistNotFoundDescription: "- Oynatma Listesini Bulamadım Balım.",
          accessDenied: "Erişim Engellendi",
          accessDeniedDescription: "- Şarkı yada oynatma listesi eklemek için yetkin yok.",
          songAdded: "Şarkı eklendi.",
          songAddedDescription: "-  **{songInput}** oynatma listesine eklendi. **{playlistName}**.",
          error: "HATA",
          errorDescription: "- Şarkı eklenirken bir hata oluştu."
      }
  },
  allplaylists: {
    embed: {
        noPlaylistsFound: "Oynatma listesi bulunamadı.",
        noPlaylistsFoundDescription: "- Oynatma listesi bulunamadı.",
        createdBy: "Oluşturan: {userId}",
        serverName: "Server: {serverName}",
        songs: "Şarkılar: **{songCount}**",
        publicPlaylistsTitle: "Public Playlists (Page {currentPage}/{totalPages})",
        error: "HATA",
        errorDescription: "- Playlist başlatılırken hata oluştu."
    }
  },
  autoplay: {
    embed: {
        autoplayUpdated: "Otomatik oynat güncellendi",
        autoplayStatus: "- Otomatik oynat**{status}** ",
        enabled: "aktif",
        disabled: "kapatıldı.",
        error: "HATA",
        errorDescription: "- Otomatik oynat güncellenirken hata oluştu."
    },
    commandDescription: "Otomatik oynatı aç/kapat."
  },
  createplaylist: {
    embed: {
        playlistExists: "Oynatma listesi mevcut.",
        playlistExistsDescription: "- Bu isimde bir playlist mevcut.",
        playlistCreated: "Oynatma listesi oluşturuldu.",
        playlistCreatedDescription: "- Oynatma listesi **{playlistName}** oluşturuldu..\n- Visibility: **{visibility}**.",
        private: "Gizli",
        public: "Herkese açık",
        error: "HATA",
        errorDescription: "- Oynatma listesi oluştururken hata oluştu."
    },
    commandDescriptionName: "Oynatma listesinin adını girin",
    commandDescriptionPrivate: "Oynatma listesini gizle (Sadece sen görebilirsin :wink:)"
  },
  deleteplaylist: {
    embed: {
        playlistNotFound: "Oynatma listesi bulunamadı.",
        playlistNotFoundDescription: "- Oynatma listesini bulamadım.",
        accessDenied: "Erişim engellendi.",
        accessDeniedDescription: "- Bu oynatma listesine erişim iznin yok.",
        playlistDeleted: "Oynatma listesi başarıyla silindi.",
        playlistDeletedDescription: "- Oynatma listesi **{playlistName}** silindi.",
        error: "HATA",
        errorDescription: "- Oynatma listesini silerken bir hata oluştu."
    },
    commandDescriptionName: "Oynatma listesinin adını girin."
  },
  deletesong: {
    embed: {
        playlistNotFound: "Oynatma listesi bulunamadı",
        playlistNotFoundDescription: "- Oynatma listesini bulamadım :Nahh:",
        songDeleted: "Şarkı listeden kaldırıldı.",
        songDeletedDescription: "- Şarkı **{songName}** başarıyla silindi. **{playlistName}**.",
        error: "HATA",
        errorDescription: "- Şarkıyı listeden kaldırırken bir hatayla karşılaştım :face_holding_back_tears:"
    },
    commandDescriptionPlaylist: "Oynatma listesinin adını gir",
    commandDescriptionSong: "şarkının adını gir"
  },
  filters: {
    embed: {
        error: "Hata",
        noPlayer: "- Çalan şarkı yok. Önce şarkı açsana",
        wrongChannel: "- Botu kullanmak için önce aynı sesli sohbette olmalısın.",
        filtersCleared: "Tüm filtreler silindi.",
        invalidFilter: "Bilinmeyen filtre seçildi.",
        filterApplied: "Filtre **{filter}** uygulandı. ",
        errorProcessing: "- İsteğini gerçekleştirirken bir hatayla karşılaştım."
    },
    commandDescription: "Uygulamak için bir filtre seç."
  },
  help: {
    embed: {
        title: "📜 {botName} Yardım menüsü",
        author: "Yardım",
        description: `
        **Hoşgeldin {botName}!**

        > Karadenizlileri götünden siken gelişmiş müzik botu :fire:
        > Botun kullanılabilir komutları bunlar:
                
        **📂 Komutlar:** {totalCommands}
        **🌐 Sunucular:** {totalServers}
        **👥 Kullanıcılar:** {totalUsers}
        **⏳ Çalışma saati:** {uptimeString}
        **📡 Ping:** {ping}ms
        `,
        availableCommands: "Kullanılabilen komutlar",
        noDescription: "Açıklama yok",
        noCommands: "Komut bulunamadı.",
        error: "❌ Yardım menüsü getirilirken hata oluştu."
    },
    commandDescription: "Bot hakkında bilgi edin."
  },
  myplaylists: {
    embed: {
        noPlaylistsFound: "Oynatma listesi bulunamadı.",
        noPlaylistsFoundDescription: "- Herhangi bir oynatma listesi oluşturmamışsın.",
        yourPlaylistsTitle: "Oynatma listelerin (Page {currentPage}/{totalPages})",
        visibility: "Görünürlük",
        private: "Gizli",
        public: "Herkese açık",
        server: "Server",
        songs: "Şarkılar",
        error: "HATA",
        errorDescription: "- Çalma listeleri getirilirken hata oluştu."
    }
  },
  nowPlaying: {
    embed: {
        error: "HATA",
        noSong: "- Şuanda çalan şarkı yok.",
        nowPlaying: "Çalıyor",
        errorDescription: "- Talebiniz işlenirken hata oluştu."
    }
  },
  pause: {
    embed: {
        error: "HATA",
        noActivePlayer: "- Çalan bir şey yok.",
        paused: "Durdurdum.",
        pausedDescription: "**- Çalan şarkı durduruldu.**",
        errorDescription: "- İstediğini gerçekleştirirken bir hatayla karşılaştım."
    }
  },
  play: {
    embed: {
        error: "HATA",
        noVoiceChannel: "- Bu komutu kullanmak için bir ses kanalında olmalısın.",
        noLavalinkNodes: "- İsteği gerçekleştirmek için kullanılabilir Lavalink Node yok.",
        noResults: "- Sonuçlar bulunamadı.",
        requestUpdated: "İstekler güncellendi.",
        successProcessed: "- Talebiniz başarıyla işlendi.\n- Oynatmayı kontrol etmek için lütfen düğmeleri kullanın.",
        errorProcessing: "- Talebini gerçekleştirirken bir hatayla karşılaştım."
    },
    commandDescription: "Şarkı yada oynatma listesi linki paylaş"
  },
  playCustomPlaylist: {
    embed: {
        error: "HATA",
        noVoiceChannel: "- Bu komutu kullanmak için bir ses kanalında olmalısın.",
        playlistNotFound: "- Oynatma listesi bulunamadı.",
        accessDenied: "Erişim reddedildi.",
        noPermission: "- Bu gizli oynatma listesine erişim iznin yok.",
        emptyPlaylist: "- Oynatma listesi boş.",
        playingPlaylist: "Çalan oynatma listesi",
        playlistPlaying: "-  **{playlistName}** şuan çalıyor.\n- Oynatmayı kontrol etmek için düğmeleri kullanın.",
        errorResolvingSong: "- Şarkıyı çözümlerken hata oluştu.",
        errorPlayingPlaylist: "- Oynatma listesi çalarken bir hata oluştu."
    },
    commandDescription: "Oynatma listesinin adını girin."
  },
  queue: {
    embed: {
        queueEmpty: "Sıra boş",
        queueEmptyDescription: "- Sıra şuan boş. /play komutuyla sıraya şarkı ekle.",
        currentQueue: "Şuanki sıra",
        noMoreSongs: "- Sırada daha fazla şarkı yok.",
        error: "HATA",
        errorDescription: "- Sırayı geri alırken bir hata oluştu."
    }
  },
  remove: {
    embed: {
        queueEmpty: "Sıra boş",
        queueEmptyDescription: "- Sıra şuan boş. /play komutuyla sıraya şarkı ekle.",
        invalidPosition: "HATA",
        invalidPositionDescription: "- Geçersiz pozisyon. 1 ile {queueLength} arasında bir değer girin..",
        songRemoved: "Şarkı silindi.",
        songRemovedDescription: "- : **{songTitle}** sıradan silindi.",
        error: "HATA",
        errorDescription: "- Sıradan şarkıyı kaldırırken bir hata oluştu."
    }
  },
  resume: {
    embed: {
        noActivePlayer: "HATA",
        noActivePlayerDescription: "- Aktif oynatıcı bulunamadı.",
        resumed: "Çalmaya devam ediliyor.",
        resumedDescription: "**- Oynatıcı çalmaya devam ediyor.**",
        error: "HATA",
        errorDescription: "- Talebiniz işlenirken bir hata oluştu."
    }
  },
  showsongs: {
    embed: {
        error: "HATA",
        playlistNotFound: "- Oynatma listesi bulunamadı.",
        accessDenied: "Erişim Engellendi",
        noPermission: "- Gizli oynatma listesini görmek için yetkiye sahip değilsin.",
        noSongs: "- Oynatma listesinde şarkı yok.",
        songsInPlaylist: " {playlistName} şarkıları",
        songsInPlaylistPage: "{playlistName} şarkıları (Page {currentPage}/{totalPages})",
        errorDescription: "- Oynatma listesini görüntülerken bir hata oldu."
    }
  },
  shuffle: {
    embed: {
        queueEmpty: "Sıra boş",
        queueEmptyDescription: "- Sıra şuan boş. /play komutuyla sıraya şarkı ekle.",
        queueShuffled: "Sıra karıştırıldı.",
        queueShuffledDescription: "- Sıra başarıyla karıştırıldı.",
        error: "HATA",
        errorDescription: "- Sırayı karıştırırken bir hata oluştu."
    }
  },
  skip: {
    embed: {
        noActivePlayer: "Hata",
        noActivePlayerDescription: "- Aktif oynatıcı yok.",
        songSkipped: "Şarkı geçildi.",
        songSkippedDescription: "**- Sonraki şarkıyı çalmaya başlar.**",
        error: "Hata",
        errorDescription: "- Talebinizi gerçekleştirirken bir hatayla karşılaştım."
    }
  },
  stop: {
    embed: {
        noActivePlayer: "HATA",
        noActivePlayerDescription: "- Aktif oynatıcı yok.",
        musicHalted: "Şarkı durduruldu.",
        musicHaltedDescription: "**- Şarkı durdurulur.**",
        error: "HATA",
        errorDescription: "- Talebinizi gerçekleştirirken bir hatayla karşılaştım."
    }
  },
  support: {
    embed: {
        authorName: "Destek sunucusu",
        description: "Destek ve güncellemeler için Discord sunucumuza katılın:**\n- Discord - {supportServerLink}\n\n➡️ **Bizi takip edin:**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
        error: "Hata",
        errorDescription: "- Talebinizi gerçekleştirirken bir hatayla karşılaştım. "
    }
  },
  volume: {
    embed: {
        noActivePlayer: "Hata",
        noActivePlayerDescription: "- Aktif oynatıcı yok.",
        volumeUpdated: "Ses yükseltildi.",
        volumeUpdatedDescription: "- Ses seviyesini yükseltir. **{volume}%**",
        error: "hata",
        errorDescription: "Ses seviyesini ayarlarken bir hata oluştu."
    },
    volumeRangeError: "Ses seviyesi 0 ile 100 arasında olmalıdır."
  },
    errors: {
      noPermission: "Bu komutu kullanmak için yetkiye sahip değilsin.",
      generalError: "- HATA: {error}"
    }
  };


  
